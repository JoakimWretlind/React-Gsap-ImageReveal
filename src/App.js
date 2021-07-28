import React, { useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import { GlobalStyling } from './globalStyling';
import Fish from './image/fightingfish.jpg';
import { RevealP, Container, ImageContainer, Overlay } from './styling';

function App() {
  let image = useRef(null);
  let overlay = useRef(null);

  useEffect(() => {
    let Tl = gsap.timeline()
    Tl.to(overlay, { delay: 1, duration: 2.5, left: "-100vw" });
    Tl.from(image, 1.6, { scale: 1.6, ease: Power2.easeInOut, delay: -2.5 });
  }, []);

  return (
    <>
      <GlobalStyling />
      <>
        <RevealP>GSAP IMAGE REVEAL</RevealP>
        <Container>
          <Overlay ref={el => overlay = el} />
          <ImageContainer>
            <img
              ref={el => { image = el }}
              src={Fish} alt="fish" />
          </ImageContainer>
        </Container>
      </>
    </>
  );
}

export default App;