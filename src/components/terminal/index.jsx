import { AiOutlineCode } from "react-icons/ai";

import "./terminalStyles.scss"
import Bash from "../bash";
import { Link } from "react-router-dom";

const Terminal = () => {
  return (
    <div className="terminal">
        <div className="terminal_header">
            <AiOutlineCode className="terminal_logo" size={25}/>
            <span className="terminal_name">pancho@laptop:~/workspace/portfolioV3</span>
            <div className="terminal_controls">
                <span className="terminal_close">X</span>
            </div>
        </div>
        <div className="terminal_body">
            <div className="line line1">
                <Bash className="bash" />
                <span className="typer typer1">Hi there! my name is Francisco.</span>
            </div>
            <div className="line line2">
                <Bash />
                <span className="typer typer2">I&apos;m a web developer from Argentina.</span>
            </div>
            <div className="line line3">
                <Bash />
                <span className="typer typer2">I like to code, and build things on the web.</span>
            </div>
            <div className="line line4">
                <Bash className="bash" />
                <span className="typer typer3">I think the internet is for making our lives easier.</span>
            </div>
            <div className="line line5">
                <Bash className="bash" />
                <span className="typer typer4">I love linux and javascript but I&apos;m</span>
            </div>
            <div className="line line6">
                <Bash className="bash" />
                <span className="typer typer5">willing to learn anything, currently I&apos;m getting</span>
            </div>
            <div className="line line7">
                <Bash className="bash" />
                <span className="typer typer6">into typescript and C (because college).</span>
            </div>
            <div className="line line8">
                <Bash className="bash" />
                <span className="typer typer7">Feel free to get in touch</span>
            </div>
        </div>
    </div>
  )
}

export default Terminal