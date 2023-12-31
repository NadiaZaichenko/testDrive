import React, { useState, useEffect } from 'react';
import { Container, Button } from './Catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotices } from "redux/operation";
import { allNotices, isLoading } from "redux/selectors";
import CarList from "components/CarList/CarList";
import Loader from 'components/Loader/Loader';

const Catalog = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const loading = useSelector(isLoading)
    const items = useSelector(allNotices);
    const limitElem = 8;
    const [visibleItems, setVisibleItems] = useState([]);
  
    useEffect(() => {
      dispatch(getAllNotices());
    }, [dispatch]);
  
    useEffect(() => {
      const startIndex = (page - 1) * limitElem;
      const endIndex = startIndex + limitElem;
      setVisibleItems(items.slice(0, endIndex));
    }, [items, page]);
  
    const onLoadMore = () => {
      if (page < Math.ceil(items.length / limitElem)) {
        setPage((prev) => prev + 1);
      }
    };
    
    return (
      <Container>
        {loading && <Loader/>}
        {!loading && (
        <>
        <CarList items={visibleItems} />
        {page < Math.ceil(items.length / limitElem) && (
          <Button onClick={onLoadMore}>Load More</Button>
        )}
        </>
        )}
      </Container>
    );
  };
  
export default Catalog;