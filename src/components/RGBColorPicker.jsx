import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {

  const [rValue, changeRValue] = useState(0);
  const [gValue, changeGValue] = useState(0);
  const [bValue, changeBValue] = useState(0);


  const handleColor = (color, value) => {
    if (color === "r") 
    {changeRValue(value)}
    else if (color === "g") {
        changeGValue(value)
    } else {
        changeBValue(value)
    }
  }


  return (
    <div>

        <SingleColorPicker 
        color="r"
        value={rValue}
        handleColor={handleColor}
        
        />

        <SingleColorPicker 
        color="g"
        value={gValue}
        handleColor={handleColor}
        
        />

        <SingleColorPicker 
        color="b"
        value={bValue}
        handleColor={handleColor}
        
        />

        <div style={{height: "200px", backgroundColor:`rgb(${rValue}, ${gValue}, ${bValue})`}}>

        </div>

    </div>
  )
}

export default RGBColorPicker