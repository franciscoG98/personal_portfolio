import Bash from "../bash";
import { AiOutlineCode } from "react-icons/ai";
import { about_text } from "./about_text";

const Terminal = () => {
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
    </div>
  )
}

export default Terminal