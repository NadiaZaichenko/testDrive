import { useState, useEffect, useCallback } from "react";
import {useDispatch} from 'react-redux';
import { getNoticeById } from "redux/operation";
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
    Modal,
    Container, WrapperPicture, Picture, Model,Description, Accesories
 } from "components/CarItem/CarItem.styled";

const CarItem = ({item})=> {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const address = item.address;
    const parts = address.split(", ");
    const location = parts.slice(1).join(", ");
    const functionalities = item.functionalities;
    const firstElem = functionalities[0]

    const itemId = item.id.toString();

    const openModal = async() => {
      try {
        await dispatch(getNoticeById(itemId));
        setIsModalOpen(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);
    
       useEffect(() => {
        const onKeyDown = event => {
          if (event.code === 'Escape') {
            closeModal();
          }
        };
    
        document.addEventListener('keydown', onKeyDown);
    
        return () => {
          document.removeEventListener('keydown', onKeyDown);
        };
      }, [closeModal]);
    
    
      const onModalOpen = event => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      };

      function formatNumber(number) {
        return number.toLocaleString('en-US', { minimumFractionDigits: 0 });
      }

 return (
    <Item key={item.id}>
        <Wrapper>
            <ImageWrapper>
                 <Image src={item.img} alt="car" />
            </ImageWrapper>
            <Div>
                <Name>{item.make}, {item.year}</Name>
                <Price>{item.rentalPrice}</Price>
            </Div> 
              <Info>{location} | {item.rentalCompany} | {item.type} | {item.model} | {item.id} | {firstElem}</Info>
              <Button type="button" onClick={()=> openModal(item.id)}>Learn more</Button>
              {isModalOpen && (
                <Modal  onClick={onModalOpen}>
                    <Container>
                        <WrapperPicture>
                            <Picture src={item.img} alt="car"/>
                        </WrapperPicture>
                        <Model>{item.make}, {item.year}</Model>
                        <Info>{location}| Id: {item.id} | Year: {item.year} | Type: {item.type} | Fuel Consumption: 
                              {item.fuelConsumption}  | Engine Size: {item.engineSize}</Info>
                        <Description>{item.description}</Description>
                        <Accesories>Accessories and functionalities: {item.accessories} {item.functionalities}</Accesories>
                        <Accesories>
                        {item.rentalConditions} Mileage: {formatNumber(item.mileage)} Price: {item.rentalPrice}
                        </Accesories>

                    </Container>
                </Modal>
              )}
        </Wrapper>
    </Item>
 )
}

export default CarItem;