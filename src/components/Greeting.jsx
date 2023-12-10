
function Greeting({lang, text}) {
  
    if(lang==="de") {
        return(
            <p>
                Hallo {text}
            </p>
        )
    } else if (lang==="en") {
        return(
            <p>
                Hello {text}
            </p>
        )
    } else {
        return(
            <p>
                Utinni {text}
            </p>
        )
    }
    
}

export default Greeting