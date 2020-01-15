
class Person{
  constructor(name="Anonymous",location,gender,age=0){
    this.name=name;
    this.gender=gender;
    this.location=location;
    this.age=age;
  }
  getGreeting(){
    return `Hello ${this.name}`
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old`
  }
}
class Student extends Person{
  constructor(name,location,gender,age,major){
    super(name,location,gender,age)
    this.major=major
  }
  hasMajor(){
    return !!this.major
  }
  getDescription(){
    let getDescription=super.getDescription()
    return  this.hasMajor && `${getDescription} and has ${this.major} major`
  }
}
class Traveler extends Person{
  constructor(name="Anonymous",location,gender,age=0,homeLocation){
    super(name,location,gender,age)
    this.homeLocation=homeLocation
  }
  getGreeting(){
    let getGreeting=super.getGreeting()
    return this.homeLocation ? `${getGreeting}. I am visiting from ${this.homeLocation}`:getGreeting
  }
}
const me=new Traveler("Rohan",'Houston','male',29,'Maryland')
console.log(me.getGreeting())
const other=new Student("Andrew Mead","Philadelphia",'male',19,"Economics")
console.log(other)