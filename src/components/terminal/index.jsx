import Bash from "../bash";
import { AiOutlineCode } from "react-icons/ai";

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
                <span className="typer typer1">Hi there! I&apos;m Francisco a web developer</span>
            </div>
            <div className="line line2">
                <Bash />
                <span className="typer typer2">based in Argentina.</span>
            </div>
            <div className="line line3">
                <Bash />
                <span className="typer typer2">I&apos;m passionate about using web development</span>
            </div>
            <div className="line line4">
                <Bash className="bash" />
                <span className="typer typer3">to solve real-world problems and make life easier.</span>
            </div>
            <div className="line line5">
                <Bash className="bash" />
                <span className="typer typer4">I love Linux and JavaScript but am always eager</span>
            </div>
            <div className="line line6">
                <Bash className="bash" />
                <span className="typer typer5">to learn. Currently exploring TypeScript and C.</span>
            </div>
            <div className="line line7">
                <Bash className="bash" />
                <span className="typer typer6">I&apos;m open to new challenges and collaborations.</span>
            </div>
            <div className="line line8">
                <Bash className="bash" />
                <span className="typer typer7">Let&apos;s chat!</span>
            </div>
        </div>
    </div>
  )
}

export default Terminal