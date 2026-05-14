IMAGE_NAME  ?= ai-coding-share
IMAGE_TAG   ?= latest
FULL_IMAGE  := $(IMAGE_NAME):$(IMAGE_TAG)
CONTAINER   := $(IMAGE_NAME)-run
PORT        ?= 5174
EXPORT_FILE := $(IMAGE_NAME)-$(IMAGE_TAG).tar.gz

.PHONY: build run run-bg push export stop clean help local-deploy local-redeploy

help: ## 显示帮助
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

build: ## 构建 Docker 镜像
	docker build -t $(FULL_IMAGE) .

run: build ## 前台运行（退出后自动删除容器）
	docker run --rm -it -p $(PORT):5174 --name $(CONTAINER) $(FULL_IMAGE)

run-bg: build ## 后台运行
	docker run -d -p $(PORT):5174 --name $(CONTAINER) $(FULL_IMAGE)
	@echo "Running at http://localhost:$(PORT)/"

stop: ## 停止并删除后台容器
	-docker stop $(CONTAINER)
	-docker rm $(CONTAINER)

push: build ## 推送镜像到 registry
	docker push $(FULL_IMAGE)

export: build ## 导出镜像为 tar.gz
	docker save $(FULL_IMAGE) | gzip > $(EXPORT_FILE)
	@echo "Exported to $(EXPORT_FILE) ($$(du -h $(EXPORT_FILE) | cut -f1))"

clean: stop ## 删除容器和本地镜像
	-docker rmi $(FULL_IMAGE)

local-deploy: build ## 首次部署：构建并启动容器（绑定 localhost，开机自启）
	docker run -d -p 127.0.0.1:$(PORT):5174 --restart unless-stopped --name $(CONTAINER) $(FULL_IMAGE)
	@echo "Deployed at http://127.0.0.1:$(PORT)/"

local-redeploy: build ## 更新部署：停旧容器 → 重建镜像 → 启动新容器
	-docker stop $(CONTAINER)
	-docker rm $(CONTAINER)
	docker run -d -p 127.0.0.1:$(PORT):5174 --restart unless-stopped --name $(CONTAINER) $(FULL_IMAGE)
	@echo "Redeployed at http://127.0.0.1:$(PORT)/"
