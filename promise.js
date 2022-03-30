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

// var a = addPromise(3, '4')
//   .then((res) => {
//     return res;
//   // })
//   }, (err) => {
//     // return err + '';
//     throw err;
//   });
//   // .catch((err) => {
//   //   throw err;
//   // });

// console.log(a);

// setTimeout(() => console.log(a), 2200);

var rejected = Promise.reject('Failed!');

rejected.catch(e => console.log(e + ''));

console.log(rejected);