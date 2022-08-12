import React, { useState } from 'react'

export default function Textarea(props) {
    const handleUpClick = () => {
        console.log("It was Clicked");
        // setText niche useState hook wala hai 
        setText("You have Clicked on handleUpClick")
        // newText ek variable banaya or niche se useState k hook wala initial state wala (text) ko jo k empty tha usko uppercase me convert krdiya
        let newText = text.toUpperCase();
        setText(newText)

    }

    const handleLoClick = () => {
        console.log("It was Clicked");
        setText("You have Clicked on handleLoClick")
        let newText2 = text.toLowerCase();
        setText(newText2)

    }

    const handleClearClick = () => {
        console.log("It was Clicked");
        setText("You have Clicked on handleLoClick")
        let newText3 = ''
        setText(newText3)

    }

    // ye wala function isliye create kiya taaki hum Textarea me kuch type kr paae,
    // kyoki hamne Textarea me value={text} krdi thi isliye kuch type kr paae yaha pr hamne  setText(e.target.value) krdiya..
    const handleOnChange = (e) => {
        console.log("It was Clicked");
        setText(e.target.value)

    }
    //#042743
    const [text, setText] = useState("")
    return (
        <>
            <div className='container'>
                {/* h1 me agar mode LIGHT hai to h1 ka color BLACK  krdo ,Or mode agar DARK hai to h1 ka color YELLOW krdo */}
                {/* props.mode jo hai wo hamne App.js me as a props send kiya hai  */}
                <h1 className='mb-4'style={{ color: props.mode === "dark" ? 'white' : "blue" }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter something to do the action' value={text} style={{ backgroundColor: props.mode === "dark" ? '#88f52a' : "white" }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn px-3 py-2 btn-primary" onClick={handleUpClick}>Click here to UpperCase</button>
                <button className="btn px-3 py-2 mx-4 btn-danger" onClick={handleLoClick}>Click here to LowerCase</button>
                <button className="btn px-3 py-2 mx-2 btn-warning" onClick={handleClearClick}>Clear Text</button>
            </div>

            {/* ye niche wali styling hamne poore Summary wali div k liye kari hai */}
            <div className="container my-4" style={{ color: props.mode === "dark" ? 'white' : "blue" }}>
                <h1>Your Summary</h1>
                <p>{text.split(" ").filter((elem) => { return elem.length !== 0 }).length} Words , {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((elem) => { return elem.length !== 0 }).length} Minutes Read</p>
            </div>
        </>
    )
}
// .filter((elem) => {return elem.length!==0})