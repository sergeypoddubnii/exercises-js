const arr = [1, 2, 3, 4, 5, 6, 7];

const shuffleSort = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

console.log(shuffleSort(arr));

const shuffleFisherYets = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let randomIndx = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[randomIndx];
    arr[randomIndx] = temp;
  }
  return arr;
};

console.log(shuffleFisherYets(arr));
