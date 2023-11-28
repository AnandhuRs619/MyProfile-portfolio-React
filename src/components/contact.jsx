import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import emailjs from 'emailjs-com';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const formInitialDetails = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    // const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    console.log(setStatus);
  
    const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      });
    }
  
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_j2oxk8j', 'template_iapt1uw', form.current, 'FzMWdN42MPBu2ilgC')
        .then((result) => {
            console.log(form.current);
            console.log(result.text);
            alert("message send")
        }, (error) => {
            console.log(error.text);
            alert('failed to send ')
        });
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <Row>
                                            <Col xs={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.firstName} name="firstName" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                            </Col>
                                            <Col xs={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.lastName} name="lastName" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                            </Col>
                                            <Col xs={12} sm={6} className="px-1">
                                                <input type="email" value={formDetails.email} name="email" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                            </Col>
                                            <Col xs={12} sm={6} className="px-1">
                                                <input type="tel" value={formDetails.phone} name="phone" placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                            </Col>
                                            <Col xs={12} className="px-1">
                                                <textarea rows="6" value={formDetails.message} name="message" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                                <button type="submit"><span>Send</span></button>
                                            </Col>
                                            {
                                                status.message &&
                                                <Col>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                </Col>
                                            }
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
