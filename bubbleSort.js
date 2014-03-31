// Bubble Sort

var bubbleSort = function (numbers) {
  for (var i = numbers.length - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        //swap
        var temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  return numbers;
};

console.log(bubbleSort([4, 5, 6, 2, 1, 3, 5, 6]));
