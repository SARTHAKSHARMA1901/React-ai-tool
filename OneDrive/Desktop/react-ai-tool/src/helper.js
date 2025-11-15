export function checkHeading(str) {
  return /^(\*)(\*)(.*)\*$/.test(str);
}

export function removeHeadingStars(str) {
  return str.replace(/^\*{1,2}|\*$/g, "");
}
