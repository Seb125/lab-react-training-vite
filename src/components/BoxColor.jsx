
function BoxColor({r, g, b}) {
  return (
    <div className="border m-5 p-10"  style={{backgroundColor:`rgb(${r}, ${g}, ${b})`}}>BoxColor</div>
  )
}

export default BoxColor