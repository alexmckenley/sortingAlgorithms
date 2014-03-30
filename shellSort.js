// Shell Sort

var shellSort = function (numbers) {
  var n = numbers.length;
  var gaps = [5, 3, 1];

  gaps.forEach(function (gap) {
    for (var i = gap; i < n; i += gap){
      for(var j = i; j >= 0; j -= gap){
        if(numbers[j-gap] > numbers[j]){
          //swap
          var temp = numbers[j-gap];
          numbers[j-gap] = numbers[j];
          numbers[j] = temp;
          continue;
        }
        break;
      }
    }
  });
  return numbers;
};

console.log(shellSort([2, 6, 1, 0 , 7, 8, 94, 2, 1 ,4, 5, 6,7,5, 4,3, 2, 1, 23,4, 56, 7]));
