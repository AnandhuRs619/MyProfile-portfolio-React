import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLayoutEffect } from 'react';

function AOSInitializer() {
    useLayoutEffect(() => {
      AOS.init();
    }, []);
  
    return null;
  }
  
  export default AOSInitializer;
  