
const add=(a,b)=>{

  // console.log(arguments)
return a+ b
}

console.log(add(44,12))

const user={
  name:"Rohan",
  cities:['Houston','Belcamp','Portland'],
  printPLacesLived(){
    // console.log(this.name)
    // console.log(this.cities)
   const cityMsg= this.cities.map((city)=>{
      return (`${this.name} has lived in ${city}`)
    })
    return cityMsg
  }
}
console.log(user.printPLacesLived())

const multiplier={
  numbers:[1,2,3,4],
  multiplyBy: 2,
  multiply(){
    const numArr=this.numbers.map(num=>{
      return num*this.multiplyBy
    })
    return numArr
  }
}
console.log(multiplier.multiply())