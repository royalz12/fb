export function renderKeyboard(containerId, keys) {
  const container = document.getElementById(containerId);
  container.classList.add("keyboard");
  container.innerHTML = "";

  const layout = [
    ["Q","W","E","R","T","Y","U","I","O","P"],
    ["A","S","D","F","G","H","J","K","L"],
    ["Z","X","C","V","B","N","M"]
  ];

  layout.forEach(rowKeys => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    rowKeys.forEach(key => {
      const keyDiv = document.createElement("div");
      keyDiv.classList.add("key");
      keyDiv.setAttribute("data-key", key);
      keyDiv.textContent = key;
      rowDiv.appendChild(keyDiv);
    });

    container.appendChild(rowDiv);
  });
}

export function highlightKey(key, active) {
  const el = document.querySelector(`.key[data-key="${key.toUpperCase()}"]`);
  if (el) el.classList.toggle("active", active);
}
