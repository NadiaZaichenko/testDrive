import styled from '@emotion/styled';
import bg from '../../image/bg.png'

export const Container = styled.div`
width: 100%;
height: 120vw;
`;

export const Wrapper = styled.div`
background-image: url('${bg}');
background-size: contain;
background-repeat: no-repeat;
height: 70vw;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-end;
// background: linear-gradient(90.01deg,#f6f6f6 .01%,rgba(246,246,246,.192708) 27.94%,rgba(246,246,246,0) 50%);
`;

export const ContainText = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
`;

export const BigText = styled.h1`
padding: 30px;
font-family: Roboto;
color: #1d1e20;
font-size: 68px;
`;

export const Text = styled.h3`
font-family: Roboto;
color: #535460;
font-size: 44px;
white-space: pre-line;
`;

export const TextBottom = styled.h3`
font-family: Roboto;
color: #535460;
font-size: 44px;
`;

export const ImageContainer = styled.div`
padding-top: 30px;
display: flex;
justify-content: space-around;
`;

export const ContainTextBottom = styled.div`
margin-top: 40px;
padding: 100px;
background-color: #89b5c5;
`;

export const TextOnBottom = styled.p`
  color: #fff;
  font-size: 44px;
  font-family: Roboto;
`;
