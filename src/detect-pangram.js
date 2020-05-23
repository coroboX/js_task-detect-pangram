'use strict';

/**
 * Implement detectPangram function:
 *
 * A pangram is a sentence that contains every single letter of the alphabet
 * at least once. For example, the sentence "The quick brown fox jumps over
 * the lazy dog" is a pangram, because it uses the letters A-Z at least once
 * (case is irrelevant).
 * Given a string, detect whether or not it is a pangram. Return True if it
 * is, False if not. Ignore numbers and punctuation.
 *
 * @param {string} phrase
 *
 * @return {boolean}
 */
function detectPangram(phrase) {
  if (phrase.length < 26) {
    return false;
  }

  const isPanagram = phrase.match(/([a-z])(?!.*\1)/gi);
  const length = isPanagram.length;

  if (length === 26) {
    return true;
  } else {
    return false;
  }
}
detectPangram('How quickly daft juumping 34 zeeebras vex?');
module.exports = detectPangram;
