import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container ,Row , Col } from "react-bootstrap";
import meter1 from '../assets/img/st_small_507x507-pad_600x600_f8f8f8.u2-removebg-preview.png'
import colorSharp from '../assets/img/color-sharp.png'


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                     <div className="skill-bx" >
                        <h2>
                            Skills
                        </h2>
                         <p> Add details abouts my Skills .<br /></p>
                         <Carousel responsive={responsive} infinite= {true} className="skill-slider" >
                            <div className="items">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"alt="img"  />
                                <h5>MONGODB</h5>
                            </div>
                            <div className="items">
                                <img src={meter1} alt="img"  />
                                <h5>EXPRESS.JS</h5>
                            </div>
                            <div className="items">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="img"  />
                                <h5>REACT.JS</h5>
                            </div>
                            <div className="items">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="img"  />
                                <h5>NODE.JS</h5>
                            </div>
                            <div className="items">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="img"  />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="items">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="img"  />
                                <h5>NODE.JS</h5>
                            </div>
                            <div className="items">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="img"  />
                                <h5>NODE.JS</h5>
                            </div>

                         </Carousel>

                     </div>
                    </Col>
                </Row>
            </Container>
                <img className="background-image-left" src={colorSharp} alt="" />
        </section>
      )
}
