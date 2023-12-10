import { useState } from "react";


function Rating({rating}) {
    
    let myStars = [];

    for (let i = 0; i < 5; i++) {

        if (Math.round(rating-1) >= i) {
            myStars.push("★")
        } else {
            myStars.push("☆")
        }
    }
  
    console.log(myStars)
    return (


    <div>
    {myStars.map(elm =>{
        return (<span>{elm}</span>)
    })}
    </div>
  )
}

export default Rating