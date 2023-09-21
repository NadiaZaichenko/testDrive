import styled from '@emotion/styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Item = styled.li`

`;

export const HeartIcon = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
`;


export const ImageWrapper = styled.div`
width: 274px;
height: 268px;
overflow: hidden;
position: relative;
`;

export const Image  = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border: 1px;
border-radius: 14px;
`;

export const Name = styled.p`
color: #121417;
font-weight: 500;
font-size: 16px;
line-height: 24px;
`;

export const Price = styled.p`
color: #121417;
font-weight: 500;
font-size: 16px;
line-height: 24px;
;`

export const Div = styled.div`
display: flex;
justify-content: space-between;
height: 30px;
`;


export const Info = styled.p`
font-size: 12px;
color: #12141780;
font-weight: 400;
line-height: 18px;
`;

export const Wrapper = styled.div`
width: 274px;
position: relative;
padding: 12px 10px 0 10px;
height: 426px;
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
border-radius: 12px;
border: 0;
background-color: #3470FF;
color: #fff;
margin-bottom: 7px;
font-size: 14px;
transition: background-color .3s ease-in-out;
&:hover{
    background-color: #0B44CD;
}
`;

export const Modal = styled.div`
width: 100vw;
height: 100vh;
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
overflow: auto;
`;

export const Container = styled.div`
  width: 541px;
  height: 752px;
  background-color: #fff;
  position: fixed;
  top: 60%;
  left: 50%;
  margin-top: -360px;
  margin-left: -260px;
  z-index: 991;
  display: flex;
  border-radius: 24px;
  flex-direction: column;
  justify-content: flex-start;
  
`;

export const WrapperPicture = styled.div`
overflow: hidden;
width: 461px;
height: 248px;
padding: 40px 40px 0 40px;
`;

export const Picture = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border: 1px;
border-radius: 8px;
`;

export const Model = styled.span`
margin: 14px 0 0 40px;
color: #121417;
`;

export const DopContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;

export const InfoCard = styled.span`
font-size: 12px;
color: #12141780;
font-weight: 400;
line-height: 18px;
margin: 8px 224px 0 40px;
text-align: left;
`;

export const Description = styled.p`
   margin: 14px 40px;
   text-align: left;
   font-weight: 400px;
   font-size: 14px;
   line-height: 20px;
   color: #121417;
`;

export const HightText = styled.span`
margin:  0 40px;
text-align: left;
font-weight: 500px;
font-size: 14px;
line-height: 20px;
color: #121417;
`;


export const Accesories = styled.p`
font-size: 12px;
color: #12141780;
font-weight: 400;
line-height: 18px;
margin: 8px 40px;
text-align: left;
`;

export const RentalAccesories = styled.span`
font-size: 12px;
color: #363535;
font-weight: 600;
line-height: 18px;
text-align: left;
padding: 7px 14px;
`;

export const ColorText = styled.span`
font-size: 12px;
color: #3470FF;
font-weight: 600;
line-height: 18px;
text-align: left;
padding: 7px 14px;
`;

export const DivInfo =  styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
margin: 8px 40px;
`;

export const DivTel = styled.div`
background-color: #3470FF;
border-radius: 14px;
width: 168px;
height: 44px;
display: flex;
justify-content: center;
align-items: center;
margin: 24px 0 0 40px;
`;

export const TelLink = styled.a`
color: #fff;
text-decoration: none;

`;

export const SvgIcon = styled(FavoriteBorderIcon)`
width: 24px;
height: 24px;
fill: #fff;
`;

export const FavoriteIconBtn = styled(FavoriteIcon)`
width: 24px;
height: 24px;
fill: #fff;
`;
