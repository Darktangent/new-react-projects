import React from 'react'
import "./SeasonDisplay.css"

const seasonConfig={
  summer:{text:"Let's hit the beach",iconName:'sun'},
  winter:{text:"Burr, it's cold", iconName:'snowflake'}
}

const getSeason=(lat,month)=>{
  if(month>2 && month<9){
    return lat>0?'summer':'winter'
  }else{
   return lat>0?'winter':'summer'
  }
}

export default function SeasonDisplay(props) {
  const season=getSeason(props.lat,new Date().getMonth())
  // console.log(season);
  // const icon=season==='winter'?'snowflake':'sun'
  // const text=season==='winter'?"Burr, it is chilly":"Lets hit the beach"
  const {text,iconName}=seasonConfig[season]
  return (
    <div className={`season-display ${season}`}> 
    <i className={`${iconName} icon massive icon-left`} />
    <h1>{text}</h1>
    <i className={`${iconName} icon massive icon-right`}/>
    </div>
  );
  
}
