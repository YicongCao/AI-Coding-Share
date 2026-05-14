import type { SvgSceneDef } from "../SvgScene";

const Background = (
  <g>
    <rect width="1200" height="675" fill="#2B2B3D"/>
    <rect width="1200" height="675" fill="url(#signupBgGlow)"/>
  </g>
);

const Defs = (
  <defs>
    <radialGradient id="signupBgGlow" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stopColor="#FACC15" stopOpacity="0.10"/>
      <stop offset="100%" stopColor="#FACC15" stopOpacity="0"/>
    </radialGradient>
  </defs>
);

const NexLogo = (
  <g transform="translate(540, 30)">
    <g transform="scale(2.8)">
      <rect x="8.03" y="0.8" width="32" height="32" rx="9" transform="rotate(13.061 8.03 0.8)" fill="#FACC15"/>
      <path d="M21 17.2C21 17.6418 21.3582 18 21.8 18H26.4731C27.1185 18 27.4982 18.7248 27.1309 19.2554L20.4578 28.8944C20.0113 29.5392 19 29.2233 19 28.439V22.8C19 22.3582 18.6418 22 18.2 22H13.5269C12.8815 22 12.5018 21.2752 12.8691 20.7446L19.5422 11.1056C19.9887 10.4608 21 10.7767 21 11.561V17.2Z" fill="black"/>
    </g>
  </g>
);

const TitleText = (
  <g>
    <text x="600" y="170" textAnchor="middle" fill="#FACC15" fontFamily="sans-serif" fontSize="36" fontWeight="bold">NEX 体验报名</text>
    <text x="600" y="200" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="14" opacity="0.5">填写问卷，抢先体验</text>
  </g>
);

const ScreenshotTL = (
  <g transform="translate(20, 20) rotate(-6)">
    <rect x="0" y="0" width="260" height="170" rx="10" fill="#1E1E2E" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
    <image href="/screenshots/s1.png" x="4" y="4" width="252" height="162" preserveAspectRatio="xMidYMid meet" opacity="0.7"/>
  </g>
);

const ScreenshotTR = (
  <g transform="translate(920, 30) rotate(4)">
    <rect x="0" y="0" width="260" height="170" rx="10" fill="#1E1E2E" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
    <image href="/screenshots/s2.png" x="4" y="4" width="252" height="162" preserveAspectRatio="xMidYMid meet" opacity="0.7"/>
  </g>
);

const ScreenshotBL = (
  <g transform="translate(30, 480) rotate(5)">
    <rect x="0" y="0" width="260" height="170" rx="10" fill="#1E1E2E" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
    <image href="/screenshots/s3.png" x="4" y="4" width="252" height="162" preserveAspectRatio="xMidYMid meet" opacity="0.7"/>
  </g>
);

const ScreenshotBR = (
  <g transform="translate(910, 480) rotate(-3)">
    <rect x="0" y="0" width="260" height="170" rx="10" fill="#1E1E2E" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1"/>
    <image href="/screenshots/s4.png" x="4" y="4" width="252" height="162" preserveAspectRatio="xMidYMid meet" opacity="0.7"/>
  </g>
);

export const signupSceneDef: SvgSceneDef = {
  viewBox: "0 0 1200 675",
  defs: Defs,
  background: Background,
  fragments: [
    { id: "logo", content: NexLogo, enterFrom: { x: 0, y: -300 }, enterDelay: 0, floatAmp: { x: 6, y: 8 }, floatPeriod: { x: 6, y: 7 }, floatRotate: 1 },
    { id: "title", content: TitleText, enterFrom: { x: 0, y: -200 }, enterDelay: 100, floatAmp: { x: 8, y: 10 }, floatPeriod: { x: 7, y: 8 } },
    { id: "shotTL", content: ScreenshotTL, enterFrom: { x: -400, y: -300 }, enterDelay: 200, floatAmp: { x: 14, y: 16 }, floatPeriod: { x: 5, y: 6 }, floatRotate: 1.5 },
    { id: "shotTR", content: ScreenshotTR, enterFrom: { x: 400, y: -300 }, enterDelay: 250, floatAmp: { x: 16, y: 14 }, floatPeriod: { x: 5.5, y: 5 }, floatRotate: -1.5 },
    { id: "shotBL", content: ScreenshotBL, enterFrom: { x: -400, y: 300 }, enterDelay: 300, floatAmp: { x: 12, y: 18 }, floatPeriod: { x: 4.5, y: 6.5 }, floatRotate: 2 },
    { id: "shotBR", content: ScreenshotBR, enterFrom: { x: 400, y: 300 }, enterDelay: 350, floatAmp: { x: 18, y: 12 }, floatPeriod: { x: 5, y: 4.5 }, floatRotate: -2 },
  ],
};
