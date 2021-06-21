const filters = Array.from(document.querySelectorAll('[name="filter"]'));
const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');

/* eslint-disable */
const funkyLetters = {
  '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};
/* eslint-enable */

const filterOptions = {
  sarcastic(letter, index) {
    if (index % 2) return letter.toUpperCase();

    return letter.toLowerCase();
  },
  funky(letter) {
    let funkyLetter = funkyLetters[letter];
    if (funkyLetter) return funkyLetter;

    funkyLetter = funkyLetters[letter.toLowerCase()];
    if (funkyLetter) return funkyLetter;

    return funkyLetter;
  },
  unable(letter) {
    const randomAfterWord = Math.floor(Math.random() * 6) + 3;
    if (letter === ' ' && randomAfterWord > 3) return '...';

    return letter;
  },
};

function transforText(text) {
  const filter = filters.find((input) => input.checked).value;
  const changedText = Array.from(text).map(filterOptions[filter]).join('');
  result.innerHTML = changedText;
}

textArea.addEventListener('input', (e) => transforText(e.target.value));
