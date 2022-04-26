import styled from "@emotion/styled";
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`
export const ModalBox= styled.div` 
  max-width: calc(100vw - 300px);
  max-height: calc(100vh - 50px);
  background-color: white;
`
export const ModalImage = styled.img`
width:100%;
height: calc(100vh - 50px);
`