function doubleAll(numbers) {
  return numbers.map(function (number) {
    return number * 2;
  });
}

module.exports = doubleAll;

if (require.main === module) {
  console.log(doubleAll([1,2,3,4,5]));
  console.log(doubleAll([ 8, 3, 6, 8, 6, 3, 5 ]));
}