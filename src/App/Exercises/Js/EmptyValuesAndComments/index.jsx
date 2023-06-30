import React from 'react';
export const Exercise = () => {

  //variable with no assignment
  let name;
  console.log(name);

  //Function returning undefined by default
  const myFunction = () => {};
  const surname = myFunction();
  console.log(surname);

  //Object doesn't have specified key
  const myObject = { a: 1 };
  console.log(myObject.b);

  // Null  - specified value of nothingness
 let b = null;
 console.log(b);
 
  // myObject.b = 'name';
  return (
    <div>Exercise</div>
  );
};

export default Exercise
