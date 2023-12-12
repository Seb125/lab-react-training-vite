import { v4 as uuidv4 } from 'uuid';


function NumbersTable({limit}) {

  const myArray  = [];
  for (let i = 0; i < limit; i++) {
    myArray.push(i+1);
  }



  return (
    <div>
        <div className="grid grid-cols-5">
        {myArray.map((element) => {
            return (
                <div key={uuidv4()}>
                {element % 2 === 0 ? <div className="border bg-red-600 p-5">
                    {element}
                </div> : <div   className="border p-5">
                    {element}
                </div>}
                </div>
            )
        })
        }
        </div>
    </div>
  )
}

export default NumbersTable