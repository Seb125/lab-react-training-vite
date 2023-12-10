import { useState } from "react";

function Dice() {
  

  const [number, setNumber] = useState(0);
  const [empty, setEmpty] = useState(false);

  const handleClick = () => {
    
    setEmpty(true);

    setTimeout(() => {

        setEmpty(false);
        const randomNumber = Math.floor(Math.random()*6);
        setNumber((randomNumber)%6);

    }, 1000);

  }
  const one = 1;
  
    return (
    <div className="">
     {empty ? <img  src="../src/assets/images/dice-empty.png" style={{width:"200px"}}/> : <img  src={`../src/assets/images/dice${number +1}.png`} style={{width:"200px"}} onClick={handleClick}/>}
        
    </div>
  )
}

export default Dice