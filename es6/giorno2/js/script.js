const myFunction = (array, min, max) => {
  return array.filter((element, index, array) => {
    return index >= min && index <= max
  })
}

const arrayA = [0,1,2,3,4,5,6]

console.log('Primo array', arrayA);

const minIndex = 1;

const maxIndex = 5;

console.log(`L'indice minimo è ${minIndex} e l'indice massimo è ${maxIndex}`);

const arrayB = myFunction(arrayA, minIndex, maxIndex)

console.log('Nuovo array creato', arrayB);
