const arrayA = [0,1,2,3,4,5,6]

const myFunction = (array, min, max) => {
  return array.filter((element, index, array) => {
    return index >= min && index <= max
  })
}

const minIndex = 1;

const maxIndex = 5;

const arrayB = myFunction(arrayA, minIndex, maxIndex)

console.log(arrayB);
