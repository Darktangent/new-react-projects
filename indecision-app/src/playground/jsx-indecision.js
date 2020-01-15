console.log('App.js is running');
// JSX - Javaascript XML
const app={
  title:"Indecision App",
  subtitle:"Put your life in the hand of a computer",
  options:[]

}
const onFormSubmit=(e)=>{
  e.preventDefault()
  const option=e.target.elements.option.value
  if(option){
    app.options.push(option)
    e.target.elements.option.value=''
    renderFunc()
  }
}
const handleRemoveAll=(e)=>{
  e.preventDefault()
  // const el=e.target.elements.option
  // app.options.splice(app.options.indexOf(el))
  app.options=[]
  renderFunc()
}
const onMakeDecision=()=>{
  const randomNum=Math.floor(Math.random()*app.options.length)
  const option=app.options[randomNum]
  alert(option)

}
const appRoot=document.querySelector("#app")

const renderFunc=()=>{
  const template=(
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length?"Here are the options":'No options'}</p>
      
      <button disabled ={app.options.length===0} onClick={onMakeDecision}>What should I do</button>
      <button disabled ={app.options.length===0} onClick={handleRemoveAll}>Remove All</button>
      
      <ol>
       {
        app.options.map((option,idx)=>{
          return <li key={idx}>{option}</li>
        })


       }
      </ol>
      <form action="" onSubmit={onFormSubmit}>
      <input name="option" type="text"/>
      <button>Add option</button>
      </form>
    </div>)
    ReactDOM.render(template,appRoot)
}
renderFunc()



// const user={
//   user:"Rohan",
//   age:35,
//   location:"TX"
// }
// var userName="Rohan Ganguly";
// var age=35;
// var userLocation="Houston-TX";
// function getLocation(location){
//   if(location){
//     return <p>Location: {location}</p>
//   }else{
//     return undefined
//   }
// }
// const templateTwo=(
//   <div>
//     <h1>{user.user?user.user:'Anonymous'}</h1>
//     {(user.age && user.age>18) && <p>Age: {user.age}</p>}
//    {getLocation(user.location)}
//   </div>
// )
