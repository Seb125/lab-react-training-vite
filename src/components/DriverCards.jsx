import { v4 as uuidv4 } from 'uuid';
import Rating from './Rating';


function DriverCards({driver}) {
  
  console.log(driver)
  const myCards = driver.map(element => {
    return(
      <div className="grid grid-cols-2 gap-4 text-center p-10 mr-60 ml-60 mt-10 rounded-lg bg-blue-800" key={uuidv4()}>
      <div className="flex  mx-auto "> {/* Flex container */}
        <img src={element.img} style={{ width: "100px", height: "100px" }} className="mr-4 rounded-lg" /> {/* Adjust width and margin */}
        </div>
        <div className='flex-col'>

          <Rating rating={element.rating}/>
          <h1>{element.name}</h1>
          <p>{element.car.model} {element.car.licensePlate}</p>
        </div>
      
    </div>
    )
  });
  console.log(myCards)
  
  return (
    <div>
      {myCards}
    </div>
  )
}

export default DriverCards