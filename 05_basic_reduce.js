function countWords(inputWords) {
  return inputWords.reduce(function (count, word) {
    if (count[word] === undefined) {
      count[word] = 1;
    } else {
      count[word] += 1;
    }
    return count;
  }, {});
}

module.exports = countWords;