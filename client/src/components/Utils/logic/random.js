export function randomCharacters(max) {
  let text = '';

  // a list of characters that can be chosen
  const char = 'abcdefghijklmnopqrstuvwxyz123456789';

  // get random characters from the string
  for (let i = 0; i < max; i += 1) {
    text += char.charAt(Math.floor(Math.random() * char.length));
  }

  return text;
}
