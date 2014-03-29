// Selection Sort

var selectionSort = function (numbers) {
  for (var i = 0; i < numbers.length; i++) {
    var index = i;
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[index]) {
        index = j;
      }
    }
    var temp = numbers[i];
    numbers[i] = numbers[index];
    numbers[index] = temp;
  }

  return numbers;
};

console.log(selectionSort([3, 1, 9, 4, 10, 2, 5]));