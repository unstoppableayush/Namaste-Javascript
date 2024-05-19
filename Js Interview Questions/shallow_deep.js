/**
 *  there are two ways to copy data: shallow copying and deep copying.
 */

// shallow copy

const obj = {
    a: 1,
    b: [2, 3],
  };
  
  const shallowCopy = obj;
  
  shallowCopy.a = 4;
  
  console.log(obj.a); // 4


  // Deep copy

  const obj1 = {
    a: 1,
    b: [2, 3],
  };
  
  const deepCopy = JSON.parse(JSON.stringify(obj1));
  
  deepCopy.a = 4;
  
  console.log(obj.a); // 1