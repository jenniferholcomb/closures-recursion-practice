
// closures
function outerFunc(variable1) {
  return function(variable2) {
    let sum = variable1 + variable2
    console.log(sum);
  }
}

const fiveOuter = outerFunc(5);
const sixOuter = outerFunc(6);

console.log(outerFunc(5)(2));
// console.log(fiveOuter(2));
// console.log(sixOuter(2));

//currying
