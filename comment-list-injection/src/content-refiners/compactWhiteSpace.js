function compactWhiteSpacecs(value) {
  return value.indexOf('  ') < 0 ? value : compactWhiteSpacecs(value.replace('  ', ' '));
}

export default compactWhiteSpacecs;