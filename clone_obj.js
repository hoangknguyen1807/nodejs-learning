
const clone = (src, map = new WeakMap()) => {
  if (typeof src !== 'object') { // number, string, boolean
    return src;
  } else {
    if (map.get(src)) {
      return map.get(src);
    }

    let des;
    // array
    if (Array.isArray(src)) {
      des = [];
      map.set(src, des);
      let i = 0;
      while (i < src.length) {
        des.push(clone(src[i++], map));
      }
    }
    // object
    else {
      des = {};
      map.set(src, des);
      Object.keys(src).forEach(k => {
        des[k] = clone(src[k], map);
      });
    }
    return des;
  }
};

const a = {
  10: 1,
  '1': {
    'a': 'a1308',
    'b': 'hj03jg0',
    'c': [4, 7, 2, 8, 0]
  },
  '2': {
    'd': {
      0: {'j': 47965},
      1: false,
      2: [ 'asbofn', 837642, {'l': true}]
    },
    'e': 110973,
    'f': true
  },
  '3': 'asjfhoj',
  '4': ['a', 'b', 'c', 'de', 'z'],
  '5': false,
  '6': function(b, n) {
    return b**n;
  }
};

a.self = a;


const b = clone(a);
// const c = Object.assign({}, a);
// const d = JSON.parse(JSON.stringify(a));

a['3'] = 'hello';
a['2']['f'] = 'goodbye';
a['4'][0] = 'w';

console.log("a = ");
console.log(a, '\n');

console.log("b = ");
console.log(b);

// console.log("c = ");
// console.log(c);

// console.log("d = ");
// console.log(d);
