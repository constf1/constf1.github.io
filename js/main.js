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

const keyboard = document.getElementById('MANDAIC_KEYBOARD');
letters.forEach((letter, index) => {
  const btn = document.createElement('button');
  btn.innerText = letter;
  keyboard.appendChild(btn);
});
