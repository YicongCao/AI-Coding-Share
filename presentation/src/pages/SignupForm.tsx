import { useState, type FormEvent } from "react";

const ROLES = ["产品", "研发", "PM", "市场"];

export default function SignupForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [favoriteAI, setFavoriteAI] = useState("");
  const [useCase, setUseCase] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !role) return;
    setSubmitting(true);
    try {
      await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), role, favoriteAI: favoriteAI.trim(), useCase: useCase.trim() }),
      });
      setSubmitted(true);
    } catch {
      alert("提交失败，请重试");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="signup-overlay">
        <div className="signup-card signup-thanks">
          <div className="signup-thanks-icon">✓</div>
          <h2>感谢报名！</h2>
          <p>我们会尽快开通您的体验权限</p>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-overlay">
      <form className="signup-card" onSubmit={handleSubmit}>
        <div className="signup-field">
          <label>企微英文名 *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your_name"
            required
          />
        </div>
        <div className="signup-field">
          <label>您属于哪种岗位 *</label>
          <div className="signup-roles">
            {ROLES.map((r) => (
              <button
                key={r}
                type="button"
                className={`signup-role-btn ${role === r ? "active" : ""}`}
                onClick={() => setRole(r)}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
        <div className="signup-field">
          <label>您最喜欢的 AI 产品</label>
          <input
            type="text"
            value={favoriteAI}
            onChange={(e) => setFavoriteAI(e.target.value)}
            placeholder="如 ChatGPT, Claude, Cursor..."
          />
        </div>
        <div className="signup-field">
          <label>您想用 NEX 做点什么</label>
          <textarea
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            placeholder="请描述您的使用场景..."
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="signup-submit"
          disabled={submitting || !name.trim() || !role}
        >
          {submitting ? "提交中..." : "提交报名"}
        </button>
      </form>
    </div>
  );
}
