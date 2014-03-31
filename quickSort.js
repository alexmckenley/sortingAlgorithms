// Quick Sort

var quickSort = function(numbers){
  var swap = function(first, second){
    var temp = numbers[first];
    numbers[first] = numbers[second];
    numbers[second] = temp;
  };

  var partition = function(left, right, pivotIndex){
    if(left >= right){
      return;
    }
    var storeIndex = left;
    var pivotValue = numbers[pivotIndex];
    //Move pivot to right
    swap(pivotIndex, right); 
    for(var i = left; i < right; i++){
      if(numbers[i] <= pivotValue){
        swap(i, storeIndex);
        storeIndex += 1;
      } 
    }
    swap(storeIndex, right);

    partition(left, storeIndex - 1, left);
    partition(storeIndex + 1, right, storeIndex + 1);
  };

  partition(0, numbers.length - 1, 0);
 
  return numbers; 

};

console.log(quickSort([3,5,1,2,8,2,1,5,8]));
