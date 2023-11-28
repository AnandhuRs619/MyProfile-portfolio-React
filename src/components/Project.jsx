import React from 'react'
import projImg1 from "../assets/img/netflix.png";
import projImg2 from "../assets/img/Electroz.png";
import projImg3 from "../assets/img/Portfolio.png";
import projImg4 from "../assets/img/TODO.png";
import projImg5 from "../assets/img/Tesla.png";
import projImg6 from "../assets/img/ARS-info.png";
import colorSharp2 from '../assets/img/color-sharp2.png'
import { Row ,Container , Col , Tab ,Nav} from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
// import { Key } from 'react-bootstrap-icons';
export const Project = () => {
    const projects = [
        {
          title: "NETFLIX-Clone",
          description: "Design & Development in React",
          imgUrl: projImg1,
          liveUrl:'https://mynetflix-app-clone.netlify.app/',
          GitUrl :'https://github.com/AnandhuRs619/netfilx-clone',
        },
        {
          title: "Electroz.Shop",
          description: "Ecommerce Website using MERN Stack",
          imgUrl: projImg2,
          liveUrl:'https://www.electroz.shop/',
          GitUrl :'https://github.com/AnandhuRs619/Electroz',
        },
        {
          title: "MY Portfolio",
          description: "Design & Development",
          imgUrl: projImg3,
          liveUrl:'https://anandhursprofile.netlify.app/',
          GitUrl :'https://github.com/AnandhuRs619/Personal-Website',
        },
        {
          title: "Todo-APP",
          description: "Design & Development in React",
          imgUrl: projImg4,
          liveUrl:'https://mytodo-appz.netlify.app/',
          GitUrl :'https://github.com/AnandhuRs619/React-Todo-App',
        },
        {
          title: "Tesla-clone",
          description: "Design & Development",
          imgUrl: projImg5,
          liveUrl:'https://tesla-clone-0.netlify.app/',
          GitUrl :'https://github.com/AnandhuRs619/tesla',
        },
        {
          title: "ARS-INFOS",
          description: "Design & Development",
          imgUrl: projImg6,
          liveUrl:'https://ars-info.netlify.app/',
          GitUrl :'https://github.com/AnandhuRs619/ARS-infos',
        },
      ];

  return (
    <section className='project' id='project'>
    <Container>
      <Row>
        <Col>
          <h2>Projects</h2>
          <p>Projects description in here </p>
          <Tab.Container id='project-tabs' defaultActiveKey='first'>
            <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-item-center' id='pills-tab'>
              <Nav.Item>
                <Nav.Link eventKey='first'>Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='third'>Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey='second'>Second one is here</Tab.Pane>
              <Tab.Pane eventKey='third'>Third one is here</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
    <img className='background-image-right' src={colorSharp2} alt="" />
  </section>
  )
}
