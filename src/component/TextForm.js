import './TextForm.css'
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnClick=()=>{
        console.log("Clicked")
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleOnLow=()=>{
        let newtxt=text.toLowerCase();
        setText(newtxt)
    }
    const handleOnClear=()=>{
        let newtext=("")
        setText(newtext)
    }
    const handleOnCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    // const handleOnExtraSpaces=()=>{
    //     let newText=text.split(/[]+/);
    //     setText(newText.join(" "))
    // }
    const [text,setText]=useState("")
    
  return (
    <>
    <div>
        <h3>{props.heading} : </h3>
        <div className="mb-3 ">
            <textarea className="form-control txt" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
       <div className="button">
       <button className="btn btn-primary" onClick={handleOnClick}>Convert To UpperCase</button>
       <button className="btn btn-primary" onClick={handleOnLow}>Convert To LowerCase</button>
       <button className="btn btn-primary" onClick={handleOnClear}>Clear Text</button>
       <button className="btn btn-primary" onClick={handleOnCopy}>Copy Text</button>
       {/* <button className="btn btn-primary" onClick={handleOnExtraSpaces}>Remove Extra Spaces</button> */}
       </div>
    </div>
    <div className="box">
     <p className='my-5 words'>There are {text.split(" ").length}  words and {text.length} characters</p>
    <p className='my-5'>{0.008*text.split(" ").length} Minutes are required to read your msg</p>
    
    </div>
    <h2 className="my-3 summary">Preview - </h2>
    <div className='preview'>
    <p>{text}</p>

    </div>
    </>
  )
}
