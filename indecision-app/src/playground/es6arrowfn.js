
function square(x){
  return x*x
}
console.log(square(4));

const es6square=(x)=> x*x
const sum=(...input)=>{
  let total=0
  for (let num of input){
    total+=num
  }
  return total
}
console.log(sum(1,2,3,43,50))
console.log(es6square(8));

// 
// const fullName="Rohan Ganguly"
// const getFirst=(full)=>{
//   return full.split(' ')[0]
// }
const getFirst=(full)=>full.split(' ')[0]

console.log(getFirst("Rohan Ganguly"))

