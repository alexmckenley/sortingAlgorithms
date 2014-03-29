//Insertion Sort

var insertionSort = function (numbers) {
  for (var i = 1; i < numbers.length; i++) {
    for (var j = i; j > 0; j--) {
      if (numbers[j] >= numbers[j - 1]) {
        break;
      } else {
        //swap
        var temp = numbers[j];
        numbers[j] = numbers[j - 1];
        numbers[j - 1] = temp;
      }
    }
  }
  return numbers;

};

console.log(insertionSort([6, 4, 2, 3, 7]));