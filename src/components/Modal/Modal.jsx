import { useEffect} from "react";
import { 
    Modal,
    Container, WrapperPicture, Picture, Model,Description, Accesories, DopContainer, InfoCard, HightText, RentalAccesories, DivInfo, ColorText, TelLink, DivTel,DivClose, CloseSvg
 } from "components/Modal/Modal.styled";

const ModalWindow = ({item, onClose}) => {
    // const [isModalOpen, setIsModalOpen] = useState(true);
    // const dispatch = useDispatch();
    const address = item.address;
    const parts = address.split(", ");
    const location = parts.slice(1).join(", ");

    // const closeModal = useCallback(() => {
    //     setIsModalOpen(false);
    // }, []);
    
       useEffect(() => {
        const onKeyDown = event => {
          if (event.code === 'Escape') {
            onClose();
          }
        };
    
        document.addEventListener('keydown', onKeyDown);
    
        return () => {
          document.removeEventListener('keydown', onKeyDown);
        };
      }, [onClose]);
    
      const conditionArray = item.rentalConditions.split('\n');
      const price = conditionArray[0].split(' ');
      const priceWithDollar = item.rentalPrice
      const priceDollarSign = priceWithDollar.slice(1) + "$"

      const handleBackdropClick = ({ target, currentTarget }) => {
        if (currentTarget === target) {
            onClose();
        }
      };

      function formatNumber(number) {
        return number.toLocaleString('en-US', { minimumFractionDigits: 0 });
      }

      return(
        <Modal  onClick={handleBackdropClick}>
                    <Container>
                        <DivClose >
                          <CloseSvg onClick={()=> onClose()}/>
                        </DivClose>
                        <WrapperPicture>
                            <Picture src={item.img} alt="car"/>
                        </WrapperPicture>
                        <DopContainer>
                             <Model>{item.make} {item.model}, {item.year}</Model>
                        <InfoCard>{location}| Id: {item.id} | Year: {item.year} | Type: {item.type} | Fuel Consumption: 
                              {item.fuelConsumption}  | Engine Size: {item.engineSize}</InfoCard>
                        <Description>{item.description}</Description>
                        <HightText>
                            Accessories and functionalities:
                        </HightText>
                        <Accesories> {item.accessories} {item.functionalities}</Accesories>
                        <HightText>
                            Rental Conditions
                        </HightText>
                        <DivInfo>
                             <RentalAccesories>
                        {price[0]} {price[1]}<ColorText>{price[2]}</ColorText></RentalAccesories>
                        
                        <RentalAccesories>{conditionArray[1]}</RentalAccesories>
                        <RentalAccesories>{conditionArray[2]}</RentalAccesories>
                        <RentalAccesories> Mileage:<ColorText>{formatNumber(item.mileage)}</ColorText> </RentalAccesories> 
                        <RentalAccesories>Price:<ColorText>{priceDollarSign}
                        </ColorText> </RentalAccesories>    
                        </DivInfo>
                        </DopContainer>
                        <DivTel>
                            <TelLink href="tel:+380730000000">
                           Rental car
                       </TelLink>
                        </DivTel>
                       

                    </Container>
                </Modal>
      )
}

export default ModalWindow;