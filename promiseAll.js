"use script";

const promiseAllcustom = (array) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let done = 0;
    array.forEach((value, indx) => {
      Promise.resolve(value)
        .then((result) => {
          results[indx] = result;
          done += 1;
          if (done === results.lengths) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};
