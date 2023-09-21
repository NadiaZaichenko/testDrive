import { useState} from "react";
import ModalWindow from "components/Modal/Modal";
import useLocalStorage from "hook/useLocalStorage";
import { 
    Item, 
    Wrapper, 
    Image, 
    Name, 
    ImageWrapper, 
    Price, 
    Info, 
    Div,
    Button,
//    SvgIcon,
    HeartIcon, FavoriteIconBtn
 } from "components/FavoriteItem/Favorite.styled";



const FavoriteItem =({item})=> {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const address = item.address;
    const parts = address.split(", ");
    const location = parts.slice(1).join(", ");
    const functionalities = item.functionalities;
    const firstElem = functionalities[0];

    const [favoriteItem, setFavoriteItem] = useLocalStorage('favorite',[]);

    const deletefavorite = id => {
        setFavoriteItem(prev => prev.filter(item => item.id !== id));
       };
       
  
      const handleToggleModal = () => {
          setIsModalOpen((prev) => !prev);
        };
   return (
     <>
     {favoriteItem.map(elem => {
        if(elem.id === item.id) {
            return (
           <Item key={item.id}>
               <Wrapper>
              <ImageWrapper>
              <HeartIcon type="button"  onClick={() => deletefavorite(item.id)}>
                  <FavoriteIconBtn />
                  </HeartIcon>
              
                   <Image src={item.img} alt="car" />
              </ImageWrapper>
              <Div>
                  <Name>{item.make} {item.model}, {item.year}</Name>
                  <Price>{item.rentalPrice}</Price>
              </Div> 
                <Info>{location} | {item.rentalCompany} | {item.type} | {item.model} | {item.id} | {firstElem}</Info>
                <Button type="button" onClick={handleToggleModal}>Learn more</Button>
  
                {isModalOpen && (
                  <ModalWindow onClose={handleToggleModal} item={item} >
                  </ModalWindow>
                )}
          </Wrapper>
      </Item>
            )
        }
       
    })}
     </>
    
   )}

export default FavoriteItem