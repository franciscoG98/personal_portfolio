import Bash from "../bash";
import { AiOutlineCode } from "react-icons/ai";
import { about_text } from "./about_text";
// import { useState } from "react";

const Terminal = () => {

  // const [animation, setAnimation] = useState(false)

  // console.log(animation);

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   setAnimation(!animation)
  //   const line = document.getElementsByClassName('line')
  //   line.style.setAnimation = 'none'
  //   console.log(line);
  // }

  return (
    <div className="terminal">
      <div className="terminal_header">
        <AiOutlineCode className="terminal_logo" size={25}/>
        <span className="terminal_name">Terminal</span>
      </div>
      <div className="terminal_body">
        {
          about_text.map((line, idx) => (
            <div key={idx} className="line">
              <Bash className="bash" />
              <span className="typer">{line}</span>
            </div>
          ))
        }
      </div>
      {/* <button onClick={(e) => handleClick(e)}>Skip Animation</button> */}
    </div>
  )
}

export default Terminal