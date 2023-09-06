import React from 'react'

export default function About(props) {

    // const [mystyle, setMystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setbtnText] = useState('Enable Dark Mode')
    // const togglestyle = () => {
    //     if (mystyle.color === 'white') {
    //         setMystyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText("Enable Dark Mode");
    //     }
    //     else {
    //         setMystyle({
    //             color: 'white',
    //             backgroundColor: '#36454F',
    //             border: '1px solid white'
    //         })
    //         setbtnText("Enable ligth Mode");
    //     }
    // }

    return (
        <>
            <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
                <h1 className="my-2 mx-3">About Us</h1>
                <div className="accordion accordion-flush" id="accordionFlushExample" >
                    <div className="accordion-item" style = {{backgroundColor: props.mode==='dark'?'#36454F':'white',color: props.mode==='light'?'black':'white'}} >
                        <h2 className="accordion-header" id="flush-headingOne"  >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style = {{backgroundColor: props.mode==='dark'?'#36454F':'white',color: props.mode==='light'?'black':'white'}} >
                                What can this website do ?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">This Website is build due to purpose of counting words, Sentenses, Time to read that paragraph, Converting a Paragraph to UpperCase, LowerCase letters, Copying the text and many more.</div>
                        </div>
                    </div>
                    <div className="accordion-item" style = {{backgroundColor: props.mode==='dark'?'#36454F':'white',color: props.mode==='light'?'black':'white'}}>
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style = {{backgroundColor: props.mode==='dark'?'#36454F':'white',color: props.mode==='light'?'black':'white'}}>
                                About the Owner 
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">The Website is build by <code> Mr. Jatin Mahawar</code>. He is a Second-year UG student at IIT Kharagpur of the dept. of Computer Science.</div>
                        </div>
                    </div>
                    <div className="accordion-item" style = {{backgroundColor: props.mode==='dark'?'#36454F':'white',color: props.mode==='light'?'black':'white'}} >
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style = {{backgroundColor: props.mode==='dark'?'#36454F':'white',color: props.mode==='light'?'black':'white'}}>
                                About IIT Kharagpur
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">IIT Khargpur is a institute for engineering, estibllized in 1951 ( also Known as Mother of IITs).</div>
                        </div>
                    </div>
                </div>
                {/* <div className="container my-3">
                    <button type="button" onClick={togglestyle} className="btn btn-success">{btnText}</button>
                </div> */}
            </div>
        </>
    )
}
