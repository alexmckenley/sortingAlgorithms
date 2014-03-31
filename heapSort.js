// Heap Sort

var heapSort = function (numbers){

  var swap = function(first, second){
    var temp = numbers[first];
    numbers[first] = numbers[second];
    numbers[second] = temp;
  };

  var siftUp = function(parentIndex, childIndex){
    while(numbers[childIndex] > numbers[parentIndex]){
      swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor(parentIndex / 2);
    }
  };

  var siftDown = function(index, heapSize){
    var leftChildIndex;
    var rightChildIndex;
    while(true){
      leftChildIndex = index * 2 + 1; 
      if(leftChildIndex >= heapSize){
        return;
      }
      if(numbers[leftChildIndex] > numbers[index]){
        swap(leftChildIndex, index);
        index = leftChildIndex;
        continue;
      } 
      rightChildIndex = leftChildIndex + 1; 
      if(rightChildIndex >= heapSize){
        return;
      }
      if(numbers[rightChildIndex] > numbers[index]){
        swap(rightChildIndex, index);
        index = rightChildIndex;
        continue;
      } 
      break;
    } 
  }; 

  var heapify = function(start, end){
    var parentIndex;
    for(var i = start + 1; i <= end; i++){
      parentIndex = Math.floor(i / 2);
      if(numbers[i] > numbers[parentIndex]){
        //swap
        siftUp(parentIndex, i);
      }
    }  
  };

  var sort = function(){
    for(var i = numbers.length - 1; i >= 0; i--){
      swap(0, i);
      siftDown(0, i);
      console.log(numbers);
    }
  };

  heapify(0, numbers.length - 1);
  sort();

  return numbers;
};

console.log(heapSort([2, 4, 6,2 , 23, 4, 667,7]));
