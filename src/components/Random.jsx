
function Random({min, max}) {
  
  
  
    return (
    <div>Random: {Math.floor(Math.random()*(max-min)+min)}</div>
  )
}

export default Random