import { AiOutlineCode } from "react-icons/ai";

import "./terminalStyles.scss"

const Terminal = () => {
  return (
    <div className="terminal">
        <div className="terminal_header">
            <AiOutlineCode className="terminal_logo" size={25}/>
            <span className="terminal_name">pancho@laptop:~/workspace/portfolioV3</span>
            <div className="terminal_controls">
                <span className="terminal_min"></span>
                <span className="terminal_big"></span>
                <span className="terminal_close">X</span>
            </div>
        </div>
        <div className="terminal_body"></div>
    </div>
  )
}

export default Terminal