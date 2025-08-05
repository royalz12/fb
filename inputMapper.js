// 누른 키 저장용
let pressedKeys = new Set();
let mappingInProgress = false;
let container = null;

export function startKeyMapping() {
  if (mappingInProgress) return;

  mappingInProgress = true;
  pressedKeys.clear();

  // 기존 레이아웃 제거 후 다시 그리기
  if (container) container.remove();
  container = renderKeyboardLayout();
  document.body.appendChild(container);

  showInstruction("아래에서 5개의 키를 누르세요...");

  // 키 이벤트 리스너
  window.addEventListener("keydown", handleKeyDown);
}

function handleKeyDown(e) {
  const key = e.key.toUpperCase();

  // 무의미한 키 무시 (예: Shift, Control 등)
  if (!isMappableKey(key)) return;

  if (!pressedKeys.has(key)) {
    pressedKeys.add(key);
    const keyDiv = document.querySelector(`.key[data-key="${key}"]`);
    if (keyDiv) keyDiv.classList.add("pressed");
  }

  if (pressedKeys.size >= 5) {
    completeMapping();
  }
}

function completeMapping() {
  window.removeEventListener("keydown", handleKeyDown);
  mappingInProgress = false;

  showInstruction(`매핑 완료: ${Array.from(pressedKeys).join(", ")}`);

  // TODO: 여기에 매핑 결과 저장 또는 콜백 실행 가능
}

function renderKeyboardLayout() {
  const layout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"]
  ];

  const container = document.createElement("div");
  container.id = "keyboard";
  container.style.margin = "20px";

  layout.forEach((rowKeys) => {
    const row = document.createElement("div");
    row.className = "row";
    rowKeys.forEach((key) => {
      const keyDiv = document.createElement("div");
      keyDiv.className = "key";
      keyDiv.dataset.key = key;
      keyDiv.innerText = key;
      row.appendChild(keyDiv);
    });
    container.appendChild(row);
  });

  return container;
}

function isMappableKey(key) {
  return /^[A-Z0-9]$/.test(key); // 알파벳, 숫자만 허용
}

function showInstruction(text) {
  let instruction = document.getElementById("instruction");
  if (!instruction) {
    instruction = document.createElement("div");
    instruction.id = "instruction";
    instruction.style.fontSize = "20px";
    instruction.style.margin = "10px";
    document.body.insertBefore(instruction, document.body.firstChild);
  }
  instruction.innerText = text;
}
