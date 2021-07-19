import { useEffect } from "react";
import AOS from "aos";
import '../styles/index.css'
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 120, delay: 0, duration: 700, easing: 'ease',
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;