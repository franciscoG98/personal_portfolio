import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
const WorkCard = ({ title, image, alt, description, siteLink, repoLink }) => {
  return (
    <div className="card_container">
      <img className="card_img" src={image} alt={alt} />
      <h2>{title}</h2>
      <p className="card_description">{description}</p>
      <div className="card_icons">
        <a className="card_link" href={repoLink} target="__blank" rel="noopener noreferrer">
          <SiGithub className="icon" size={30}/>
          <span>Repository</span>
        </a>
        <a className="card_link" href={siteLink} target="__blank" rel="noopener noreferrer">
          <BiLinkExternal className="icon" size={30}/>
          <span>View&nbsp;Site</span>
        </a>
      </div>
    </div>
  )
}

export default WorkCard