const MAX_LENGTH_OF_STRING = 120;

function TruncateString(text) {
  return text.length > MAX_LENGTH_OF_STRING ? text.slice(0, MAX_LENGTH_OF_STRING) + "..." : text;
}

export default TruncateString;
