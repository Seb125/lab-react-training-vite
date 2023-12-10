import { useState } from "react";


function ClickablePicture() {
  
    
    const [clicked, setClicked] = useState(true);
    const handleClick = () => {
        setClicked(!clicked);
    }
  
    return (
    <div className="relative">

        {clicked && <img src="../src/assets/images/glasses.png" style={{width:"100px"}} className="absolute z-10 top-12 left-12"/> }
        

        <img src="http://res.cloudinary.com/djyjdargg/image/upload/v1550166409/Ironclass/IH_Jan1933.jpg.jpg" className="absolute z-0" onClick={handleClick}/>
    </div>
  )
}

export default ClickablePicture