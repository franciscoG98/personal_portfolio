import "./bashStyles.scss"

// eslint-disable-next-line react/prop-types
const Bash = () => {
  return (
    <p className="bash">
      <span className="bash_name">pancho@laptop</span>
      <span className="bash_dots">:</span>
      <span className="bash_line">~</span>
      <span className="bash_dollar">$</span>
    </p>
  )
}

export default Bash