import styled from "@emotion/styled";

export const Image = styled.div`
display:flex;
justify-content:center;
width: 100vw;
height:100vh;
&:after {
  content: " ";
  display: block;
  width: 94px;
  height: 94px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`