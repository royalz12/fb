let mappedKeys = [];

export function startKeyMapping(onComplete) {
  mappedKeys = [];
  let keyDowns = new Set();

  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase();
    if (!keyDowns.has(key)) {
      keyDowns.add(key);
      mappedKeys.push(key);
      document.getElementById("status").textContent = `입력 중: ${Array.from(keyDowns).join(", ")}`;
    }

    if (keyDowns.size >= 5) {
      document.removeEventListener("keydown", handleKeyDown);
      onComplete(Array.from(keyDowns));
    }
  };

  document.addEventListener("keydown", handleKeyDown);
}

export function getMappedKeys() {
  return mappedKeys;
}
