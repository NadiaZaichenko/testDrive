import { Container } from "./Catalog.styled"
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { getAllNotices } from "redux/operation";
import { allNotices } from "redux/selectors";
import CarList from "components/CarList/CarList";

const Catalog = () => {
    
    const dispatch = useDispatch();
    const items = useSelector(allNotices)
     
    useEffect(() => {
      dispatch(getAllNotices())
     }, [dispatch])

    return (
       <Container>
           <CarList items={items}/>
       </Container>
    )
}

export default Catalog;