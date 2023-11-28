
import { useEffect, useState } from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from "../assets/img/header-img.svg"



export const Banner = () => {
 const [loopNum,setLoopNum] = useState(0);
 const [isDeleting , setDeleting] = useState(false);
 const [text, setText]=useState('');
 const toRotate = ['web Developer','Web Designer','UI/UX Designer'];
 const [delta,setDelta]= useState(300 - Math.random() * 100);
 const period = 2000;

 useEffect(()=>{
    let ticker = setInterval(() => {
       tick() 
    }, delta);

    return()=>{clearInterval(ticker)}

 },[text])

 const tick =( ) =>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0,text.length + 1 );
    setText(updatedText);

    if(isDeleting){
        setDelta(prevDelta => prevDelta/2);
    }
    if(!isDeleting && updatedText === fullText){
        setDeleting(true);
        setDelta(period);
    }else if(isDeleting && updatedText === ''){
        setDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);

    }
 } 
  return (
    <section className='banner' id='home' >
     <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl ={7} >
                <span className='tagline'>Welcome to my portfolio </span>
                <h1>{`Hi i'm Anandhu R S `} <span className='wrap' >{text}</span> </h1>
                <p> am an InfoSec enthusiast with profound 
                knowledge in fundamental networking and 
                security maneuvers which can be crucial for an enterprise.</p>
                <button onClick={()=> console.log('connect')} >Let's connect <ArrowRightCircle size={25} /> </button>
            </Col>
            <Col xs={12} md={6} xl={5} >
                <img src={headerImg} alt="Headder IMG" />
            </Col>

        </Row>
     </Container>
    </section>
  )
}
