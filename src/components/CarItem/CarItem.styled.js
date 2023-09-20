import styled from '@emotion/styled';

export const Item = styled.li`

`;

export const ImageWrapper = styled.div`
width: 270px;
height: 200px;
overflow: hidden;
`;

export const Image  = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border: 1px;
border-radius: 8px;
`;

export const Name = styled.p`
color: #000;
`;

export const Price = styled.p`
color: #000;
;`

export const Div = styled.div`
display: flex;
justify-content: space-between;
height: 30px;
`;


export const Info = styled.p`
font-size: 12px;
color: #12141780;
`;

export const Wrapper = styled.div`
width: 270px;
position: relative;
padding: 12px 10px 0 10px;
height: 350px;
border-radius: 20px;
background: #FFF;
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const Button = styled.button`
width: 270px;
padding: 15px 10px;
border-radius: 8px;
border: 0;
background-color: #0db4ff;
color: #fff;
margin-bottom: 7px;
font-size: 14px;
transition: background-color .3s ease-in-out, font-size .3s ease-in-out;
&:hover{
    background-color: #0084bf;
    font-size: 16px;
}
`;

export const Modal = styled.div`
width: 100%;
height: 100%;
background-color: rgba(97, 97, 97, 0.6);
backdrop-filter: blur(4px);
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
z-index: 990;
transform: scale(1);
`;

export const Container = styled.div`
  width: 541px;
  height: 752px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -360px;
  margin-left: -260px;
  z-index: 991;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const WrapperPicture = styled.div`
overflow: hidden;
width: 469px;
height: 314px;
padding-top: 15px;
`;

export const Picture = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border: 1px;
border-radius: 8px;
`;

export const Model = styled.p`

`;

export const Description = styled.p`

`;
export const Accesories = styled.p`

`;

