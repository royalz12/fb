import { startKeyMapping, getMappedKeys } from './inputMapper.js';
import { renderKeyboard, highlightKey } from './keyboardRenderer.js';

window.addEventListener("DOMContentLoaded", () => {
  renderKeyboard("keyboard");

  startKeyMapping((mapped) => {
    document.getElementById("status").textContent = `매핑 완료: ${mapped.join(", ")}`;
  });

  document.addEventListener("keydown", (e) => {
    highlightKey(e.key, true);
  });

  document.addEventListener("keyup", (e) => {
    highlightKey(e.key, false);
  });
});
