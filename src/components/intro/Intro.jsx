import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef= useRef();
   useEffect(() => {
    init(textRef.current , {
        backSpeed:1500,
        backSpeed:50,
       
         showCursor: false, strings: ['Software Engineer','Web Developer', 'Web Designer' ,'Content Creator'] })
      
   }, [])
    return (
        <div className='intro' id="intro">
            <div className="left">
                <div className="imageContainer">
                <img src={process.env.PUBLIC_URL + '/assets/man.png'} />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm </h2>
                    <h1>Nasreddine Jaouadi</h1>
                    <h3><span ref={textRef}></span></h3>
                    <a href="#portfolio">
                        <img src={process.env.PUBLIC_URL + "/assets/down.png"} alt="" />
                    </a>
                </div>
            </div>
            
        </div>
    )
}
