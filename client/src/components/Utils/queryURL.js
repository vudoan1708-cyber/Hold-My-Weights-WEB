export default function queryURL(URL, index) {
  const queryingPart = URL.split('=')[index];
  return queryingPart;
}
