const arr = [1, 3, 2, 5, 9, 4];

const bubleSort = (arr) => {
  for (let i = 0; (finishI = arr.length - 1), i < finishI; i += 1) {
    let wasSwaped = false;
    for (let j = 0; (finishJ = finishI - i), j < finishJ; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        wasSwaped = true;
      }
    }
    if (!wasSwaped) break;
  }
  return arr;
};

console.log(bubleSort(arr));
