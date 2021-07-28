import styled from 'styled-components';

export const RevealP = styled.p`
    position: absolute;
    transform: rotate(-90deg);
    top: 400px;
    font-size: 20px;
    font-weight: 700;
    font-family: "Avenir";
    letter-spacing: 10px;
`;

export const Container = styled.div`
    width: 1440px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const ImageContainer = styled.div`
  width: 1440px;
  height: 80vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
  }
`;

export const Overlay = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
   width: 1440px;
   height: 82vh;
   background: #fff;
   z-index: 2;
`;
