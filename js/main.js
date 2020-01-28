// Mandaic Keyboard Prototype

/**
* Mandaic alphabet
*/
const letters = [
  'HALQA', 'AB', 'AG', 'AD', 'AH',
  'USHENNA', 'AZ', 'IT', 'ATT', 'AKSA',
  'AK', 'AL', 'AM', 'AN', 'AS',
  'IN', 'AP', 'ASZ', 'AQ', 'AR',
  'ASH', 'AT', 'DUSHENNA', 'KAD', 'AIN'];

const result = document.createElement('div');
result.className = 'result';

const keyboard = document.getElementById('MANDAIC_KEYBOARD');

// Append letters
letters.forEach((letter, index) => {
  const btn = document.createElement('button');
  btn.innerText = letter;
  btn.onclick = () => {
    const el = document.createElement('span');
    el.className = letter;
    result.appendChild(el);
  };
  keyboard.appendChild(btn);
});

// Append result
keyboard.appendChild(result);
