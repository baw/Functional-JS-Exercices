function reduce(arr, fn, initial, index) {
  if (arr.length === index) return initial;
  index = index || 0;
  initial = fn(initial, arr[index], index, arr);
  return reduce(arr, fn, initial, index + 1);
}

module.exports = reduce;