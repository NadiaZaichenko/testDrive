import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getNoticeById } from "redux/operation";
// import { noticeById } from "redux/selectors";
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
    Modal
 } from "components/CarItem/CarItem.styled";

const CarItem = ({item})=> {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    // const notice = useSelector(noticeById);

    const itemId = item.id.toString();
    const openModal = async() => {
      try {
        await dispatch(getNoticeById(itemId));
        setIsModalOpen(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }


    const address = item.address;
    const parts = address.split(", ");
    const location = parts.slice(1).join(", ");
    const functionalities = item.functionalities;
    const firstElem = functionalities[0]

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
                <Modal>

                </Modal>
              )}
        </Wrapper>
    </Item>
 )
}

export default CarItem;