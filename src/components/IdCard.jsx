

function IdCard({firstName, lastName, gender, country, image}) {
  return (
    
    <div>
        <h2>{firstName + " " + lastName}</h2>
        <p>{gender}</p>
        <p>{country}</p>
        <img src={image} style={{width:"100px"}} />
    </div>
    
  )
}

export default IdCard