const addPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != 'number' || typeof b != 'number') {
        return reject(new Error('Parameter type must be number!'));
      }
      resolve(a + b);
    }, 2000);
  });
};

const mulPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != 'number' || typeof b != 'number') {
        return reject(new Error('Parameter type must be number!'));
      }
      resolve(a * b);
    }, 1000);
  });
};

// Promise.all([ addPromise(3, 5), mulPromise(4, 1)])
// .then(res => console.log(res))
// .catch(err => console.log(err + ''));

// Promise.race([ addPromise(3, 4), mulPromise(4, '1.5')])
// .then(res => console.log(res))
// .catch(err => { console.log(err); throw err; });


const addThenMul = (x, y, z) => new Promise(async (resolve, reject) => {
  try {
    let sum = await addPromise(x, y);
    let product = await mulPromise(sum, z);
    resolve(product);
  } catch (err) {
    reject(err);
  }
});

addThenMul(2, '3', 4)
.then(res => console.log(res))
.catch(err => console.log(err));