import React,{useState} from 'react'



export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log('Uppercase was clicked'+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Uppercase","success");

    }
    const handleCapClick=()=>{
        // let newText=text.toLowerCase();
        let newText=text.replace(text,'This is replace');
        setText(newText);
        props.showAlert("Replace to Text","success");
    }
    const handleOnChanges=(event)=>{
        console.log('Changes');
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div>
        <h3>{props.heading}</h3>
    <div className="mb-3">
  {/* <label for="mybox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} id="mybox" onChange={handleOnChanges} rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-info mx-2 my-1" onClick={handleCapClick}>Convert to Replacememnt</button>
  </div>
  <div className="container">
  <h2>Your Text Area</h2>
  <p>Your {text.split(" ").filter((element)=>{return element.length!==0}).length} and {text.length} characters</p>
  <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
  <h3>Preview</h3>
  <p>{text}</p>


 </div>
 </>
  )
}
