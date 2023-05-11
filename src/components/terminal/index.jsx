import { AiOutlineCode } from "react-icons/ai";

import "./terminalStyles.scss"
import Bash from "../bash";

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
        <div className="terminal_body">
            <div className="line line1">
                <Bash />
                <span className="typer typer1">Hi there! my name is francisco</span>
            </div>
            <div className="line line2">
                <Bash />
                <span className="typer typer2">I&apos;m a web developer from Bariloche, Argentina</span>
            </div>
            <div className="line line3">
                <Bash />
                <span className="typer typer3">I like to code, love to learn new technologies and build things on the web</span>
            </div>
            <div className="line line4">
                <Bash />
                <span className="typer typer4">I think the internet is for making our lives easier and should be accesible to everyone</span>
            </div>
            <div className="line line5">
                <Bash />
                <span className="typer typer">I&apos;m open to work or colaborate in new projects!</span>
            </div>
        </div>
    </div>
  )
}

export default Terminal