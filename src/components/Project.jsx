import React from 'react';
import { Row, Container, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projects from "../utils/ProjectData"; 

export const Project = () => {
  // Group projects into arrays with a limit of 6 projects per array
  const groupedProjects = projects.reduce((acc, project, index) => {
    const groupIndex = Math.floor(index / 6);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(project);
    return acc;
  }, []);

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Projects description in here </p>
            <Tab.Container id='project-tabs' defaultActiveKey='tab-1'>
              <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-item-center' id='pills-tab'>
                {groupedProjects.map((group, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={`tab-${index + 1}`}>Tab {index + 1}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content>
                {groupedProjects.map((group, index) => (
                  <Tab.Pane key={index} eventKey={`tab-${index + 1}`}>
                    <Row>
                      {group.map((project, projIndex) => (
                        <ProjectCard key={projIndex} {...project} /> 
                      ))}
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt='' />
    </section>
  );
};
