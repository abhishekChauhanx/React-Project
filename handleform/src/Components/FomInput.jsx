
import { useState } from "react"
import "./formInput.css"
const FomInput = (props) => {
    const [focus,setFocus] = useState("false")
    const {label,errorMess, onChange,pattern  , id , ...otherProps} = props
    function handleFocus(e){
        setFocus(true)
    }
  return (
    <div className="formInput" >
      <label>{label}</label>
      <input {...otherProps} onChange={onChange} pattern={pattern}   required={true} onBlur={handleFocus} focus={focus.toString()}/>
      <span>{errorMess}</span>
    </div>
  )
}

export default FomInput
