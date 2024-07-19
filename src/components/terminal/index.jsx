import { useState } from "react";
import Bash from "../bash";
import { AiOutlineCode } from "react-icons/ai";
import { about_text } from "./about_text";

const Terminal = () => {

  const [animation, setAnimation] = useState(true)

  const handleClick = (e) => {
    e.preventDefault()
    setAnimation(!animation)
  }

  return (
    <div className="terminal">
      <div className="terminal_header">
        <AiOutlineCode className="terminal_logo" size={25}/>
        <span className="terminal_name">Terminal</span>
      </div>
      <div className="terminal_body">
        {
          about_text.map((line, idx) => (
            <div
              key={idx}
              className={`${animation ? 'line show--animation' : 'line skip--animation'}`}
            >
              <Bash className="bash" />
              <span className="typer">{line}</span>
            </div>
          ))
        }
      </div>
      <button className="terminal__btn" onClick={(e) => handleClick(e)}>
        {
          animation
          ? 'Skip Animation'
          : 'Show Animation'
        }
      </button>
    </div>
  )
}

export default Terminal