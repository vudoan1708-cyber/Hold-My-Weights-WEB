export function isCharactersFromString(chars, string) {
  if (string.indexOf(chars) > -1) {
    return true;
  }
  return false;
}

export function reformDateString(str, elim, replacer) {
  const [date, month, year] = str.split('/');
  const fixedDate = isCharactersFromString(elim, str)
    ? date.replace(elim, replacer)
    : date;
  const fixedMonth = isCharactersFromString(elim, str)
    ? month.replace(elim, replacer)
    : month;
  return `${fixedMonth}/${fixedDate}/${year}`;
}
