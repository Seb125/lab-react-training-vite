import IdCard from "./IdCard"
import { v4 as uuidv4 } from 'uuid';


function CardsList({cards}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      
        {cards.map(card => {
            return (
              <div key={uuidv4()} className="flex-col justify-center items-center">
                  <IdCard  firstName={card.firstName} lastName={card.lastName} country={card.country}  image={card.img}/>
              </div>
            )
        })}

        
    </div>
  )
}

export default CardsList