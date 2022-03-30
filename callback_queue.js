// const nums = [1, 2, 3, 4];

// // nums.forEach(e => console.log(e));

// const asyncForEach = (array, cb) => {
//   array.forEach(cb);
// };

// asyncForEach(nums, (e) => {
//   setTimeout(console.log('Value:', e), 1000);
// });

setTimeout(() => {
  console.log('hello event loop');
}, 0);

function syncTaskOccupyingCallStack() {
  let start = new Date();
  let count = 0;
  while (true) {
    count++;
    if (new Date().valueOf() - start.valueOf() == 5000) {
      // console.log(new Date().getTime());
      break;
    }
  }
  console.log(count);
}

// syncTaskOccupyingCallStack();

const whileLoop = (count) => {
  let start = new Date();
  let i = 0;
  while (i < count) {
    i++;
  }
  console.log('Diff:', new Date().valueOf() - start.valueOf());
};

whileLoop(5500000000);
