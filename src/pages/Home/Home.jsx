import React  from "react";
import {Wrapper, BigText, Text, Container, ContainText, TextBottom, ImageContainer, ContainTextBottom, TextOnBottom} from "./Home.styled"
import car1 from '../../image/6165274.jpg'
import car2 from '../../image/6596166.jpg'
import car3 from '../../image/7849943.jpg'

const Home = () => {

    return (
        <Container>
             <Wrapper>
                <ContainText>
                    <BigText>Поринь у пригоди</BigText>
                <Text>Будь яка твоя подорож <br/>буде зручною та безпечною</Text>
                </ContainText>
             </Wrapper>

                <TextBottom>
                  Обери автомобіль який підійде саме тобі
                </TextBottom>
                <ImageContainer>
                    <img src={car1} alt="car1" width={200} height={200}/>
                    <img src={car2} alt="car1" width={200} height={200}/>
                    <img src={car3} alt="car1" width={200} height={200}/>
                </ImageContainer>
                <ContainTextBottom>
                    <TextOnBottom>
                        Отримуй емоції, а ми попіклуємось про комфорт
                    </TextOnBottom>
                </ContainTextBottom>    
        </Container>
       
    )
}

export default Home;