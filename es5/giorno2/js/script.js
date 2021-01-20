function functionName(array, min, max) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= min && i <= max) {
      newArray.push(array[i])
    }
  }
  return newArray;
}

var arrayA = [0,1,2,3,4,5,6];

var minIndex = 1;

var maxIndex = 5;

var arrayB = functionName(arrayA, minIndex, maxIndex);

console.log(arrayB);
