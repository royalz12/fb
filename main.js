import { startKeyMapping } from "./inputMapper.js";

// 초기 진입 시 키매핑 시작
window.addEventListener("DOMContentLoaded", () => {
  startKeyMapping();
});

// Esc 키 누르면 다시 키매핑 시작
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    startKeyMapping();
  }
});
