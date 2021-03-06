import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case!","success");
        
    }
    
    const handleLowClick = ()=>{
        //console.log("Lowercase was clicked" + text);
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case!","success");
    }

    const handleClearClick = ()=>{
        let newText ="";
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    
    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    //const handleCopy = () =>{
     //   var text =document.getElementById("myBox");
      //  text.select();
      //  navigator.clipboard.writeText(text.value);
    //}

    //const handleExtraSpaces = () => {
    //    let newText= text.split(/[ ]+/);
     //    setText(newText.join[" "])
    //}
    
    const [text,setText] = useState('');
    // text  = "new text "; //Wrong way to change the state
    //setText("new text");  //Correct way to change the state

    return (
    <>
     <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
         <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="12"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the text</button>
        
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to review it here"}</p>
    </div>
    </>
    )
}
