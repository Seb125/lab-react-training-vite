import { useState } from "react";

function Carousel({images}) {

  const [number, setNumber] = useState(0);
  
  const handleLeft = () => {
    const newNumber = number -1;
    newNumber < 0 ? setNumber(newNumber +4): setNumber(newNumber);
  }

  const handleRight = () => {
    setNumber((number+1)%4)
  }

  return (
    <div className="flex items-center justify-center">

        <button onClick={handleLeft}>Left</button>
            <img src={images[number]}/>
        <button onClick={handleRight}>Right</button>



    </div>
  )
}

export default Carousel