import { useState } from "react";

function LikeButtton() {

  const myColors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState(myColors[0]);


  
  const handleClick = () => {
    setLikes(likes+1);
    setColor(myColors[(likes+1)%6])
  }

  return (
    <div>

        <button className="p-10 m-10" style={{backgroundColor:color}} onClick={handleClick}>{likes} Likes</button>

    </div>
  )
}

export default LikeButtton