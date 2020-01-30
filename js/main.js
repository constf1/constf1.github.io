// Mandaic Keyboard Prototype

/**
* Mandaic alphabet
*/
const firstCodeUnit = 0x0840;

const letters = [
  'HALQA', 'AB', 'AG', 'AD', 'AH',
  'USHENNA', 'AZ', 'IT', 'ATT', 'AKSA',
  'AK', 'AL', 'AM', 'AN', 'AS',
  'IN', 'AP', 'ASZ', 'AQ', 'AR',
  'ASH', 'AT', 'DUSHENNA', 'KAD', 'AIN'];

const result = document.getElementById('MANDAIC_KEYBOARD_RESULT');
const keyboard = document.getElementById('MANDAIC_KEYBOARD');

// Append letters
letters.forEach((letter, index) => {
  const btn = document.createElement('button');
  btn.innerText = letter;
  btn.onclick = () => {
    const el = document.createElement('span');
    el.className = 'GLYPH ' + letter;
    el.title = letter;
    result.prepend(el);
    // result.appendChild(el);
    
    const input = document.getElementById('MANDAIC_KEYBOARD_INPUT');
    input.value = (input.value || '') + String.fromCharCode(firstCodeUnit + index);
  };
  keyboard.appendChild(btn);
});
