import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        if ((text.split(" ").filter((element) => { return element.length !== 0 }).length) === 0) props.showAlert(" Enter words to Make Change", "danger");
        else
            props.showAlert(" Converted to UpperCase", "success");
    }
    const handleLoclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        if ((text.split(" ").filter((element) => { return element.length !== 0 }).length) === 0) props.showAlert(" Enter words to Make Change", "danger");
        else
            props.showAlert(" Converted to LowerCase", "success");
    }
    const handleClearclick = () => {
        let newtext = ("");
        setText(newtext);
        if ((text.split(" ").filter((element) => { return element.length !== 0 }).length) === 0) props.showAlert(" Enter words to Make Change", "danger");
        else
            props.showAlert(" TextBox Clear", "success");
    }
    const handleCopyclick = () => {
        if ((text.split(" ").filter((element) => { return element.length !== 0 }).length) === 0) props.showAlert(" Enter words to Make Change", "danger");
        else
            props.showAlert(" Copied to Clipboard", "success");
       
        navigator.clipboard.writeText(text);
    }
    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if ((text.split(" ").filter((element) => { return element.length !== 0 }).length) === 0) props.showAlert(" Enter words to Make Change", "danger");
        else
            props.showAlert(" Extra Spaced Removed", "success");
    }
    const handleOnChange = (event) => {
        // setText("You clicked the functoin");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new test";      --Wrong way to change the text
    // setText("new text")     -- Correct way to change the text
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    {/* Onchange function allow to type(change ) something in textarea */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#36454F' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} id="mybox" rows="10"></textarea>
                </div>
                {/* For UpperCase all TextArea */}
                <button className="btn btn-success m-1 " onClick={handleUpclick} >Convert to UpperCase</button>
                {/* For LowerCase all TextArea */}
                <button className="btn btn-success m-1" onClick={handleLoclick} >Convert to LowerCase</button>
                {/* For copy entire text */}
                <button className="btn btn-secondary m-1" onClick={handleCopyclick} >Copy Text</button>
                {/* For removing Extra Spaces */}
                <button className="btn btn-secondary m-1" onClick={RemoveExtraSpaces} >Remove Extra Spaces</button>
                {/* For Clear the TextArea */}
                <button className="btn btn-danger m-1" onClick={handleClearclick} >Clear Text</button>

            </div>
            <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>Your Text Summary</h4>
                <p> {text.split(".").length - 1} Sentences | {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words | {text.length} Characters</p>
                <p> Time to Read : {(0.3) * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} Secounds</p>
                <p> Time to Speak : {(0.4) * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} Secounds</p>
                <h4>Preview</h4>
                <p>{text.length > 0 ? text : "Enter Something in Box to see Preview"}</p>
            </div>

        </>
    )
}
