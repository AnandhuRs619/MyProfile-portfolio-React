import { Col } from "react-bootstrap";

export const ProjectCard = ({title , description , imgUrl, liveUrl,GitUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx">
      <img src={imgUrl}alt="img" />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span><br />
        <a href={liveUrl}>
            <button className="button-margin" >Live Demo</button>
        </a>
        <a href={GitUrl}>
            <button className="button-margin" >Git Code </button>
        </a>
      </div>
    </div>
  </Col>
  )
}
