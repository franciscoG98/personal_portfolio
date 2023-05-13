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
                <span className="terminal_min"></span>
                <span className="terminal_big"></span>
                <span className="terminal_close">X</span>
            </div>
        </div>
        <div className="terminal_body">
            <div className="line line1">
                <Bash className="bash" />
                <span className="typer typer1">Hi there! my name is Francisco</span>
            </div>
            <div className="line line2">
                <Bash />
                <span className="typer typer2">I&apos;m a web developer from Bariloche,</span>
            </div>
            <div className="line line3">
                <Bash />
                <span className="typer typer2">Argentina. I like to code,</span>
            </div>
            <div className="line line4">
                <Bash className="bash" />
                <span className="typer typer3">and build things on the web.</span>
            </div>
            <div className="line line5">
                <Bash className="bash" />
                <span className="typer typer4">I think the internet is for making</span>
            </div>
            <div className="line line6">
                <Bash className="bash" />
                <span className="typer typer5">our lives easier and should be</span>
            </div>
            <div className="line line7">
                <Bash className="bash" />
                <span className="typer typer6">accessible to everyone. I&apos;m open</span>
            </div>
            <div className="line line8">
                <Bash className="bash" />
                <span className="typer typer7">to working or collaborating on new</span>
            </div>
            <div className="line line9">
                <Bash className="bash" />
                <span className="typer typer8">projects! feel free to <Link className="link_contact" to='/contact'>contact me</Link></span>
            </div>
        </div>
    </div>
  )
}

export default Terminal