function one(){
  console.log('A');
  two()
  console.log('C');
};
function two(){
  console.log('B')
};
one();

console.log("I");
console.log("Eat");
console.log("Ice Cream");

console.log("I");
// this will be shown after 2 seconds
setTimeout(()=>{
  console.log("Eat");
}, 10000)
console.log("Ice Cream");


