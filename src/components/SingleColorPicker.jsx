


function SingleColorPicker({color, value, handleColor}) {

        const handleChange = (event) => {
            const newValue = event.target.value;
            handleColor(color, newValue)
        }
  
  
    return (
        <div>
            <label>{color}</label>
            <input type="number" value={value} onChange={(event) => handleChange(event)}></input>
        </div>
  )
}

export default SingleColorPicker