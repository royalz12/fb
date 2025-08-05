const pressedKeys = new Set();

function startKeyMapping() {
  document.querySelectorAll('.key').forEach(key => {
    key.dataset.originalColor = key.style.backgroundColor;
  });

  document.addEventListener('keydown', e => {
    const keyEl = findKeyElement(e);
    if (keyEl) {
      keyEl.classList.add('pressed');
      pressedKeys.add(e.key);
    }
  });

  document.addEventListener('keyup', e => {
    const keyEl = findKeyElement(e);
    if (keyEl) {
      keyEl.classList.remove('pressed');
      pressedKeys.delete(e.key);
    }
  });
}

function findKeyElement(e) {
  const display = e.key.length === 1 ? e.key.toUpperCase() : specialMap[e.key];
  return [...document.querySelectorAll('.key')].find(k => k.textContent === display);
}

const specialMap = {
  ' ': 'Space',
  'Shift': 'Shift',
  'CapsLock': 'Caps',
  'Tab': 'Tab',
  'Enter': 'Enter',
  'Backspace': 'Back',
  'Control': 'Ctrl',
  'Escape': 'Esc'
};
