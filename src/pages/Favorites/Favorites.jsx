import React, {useEffect } from 'react';
import { Container } from './Favorites.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotices } from "redux/operation";
import { allNotices, isLoading } from "redux/selectors";
import FavoriteList from 'components/FavoriteList/FavoriteList';
import Loader from 'components/Loader/Loader';


const Favorite = () => {
    const dispatch = useDispatch();
    const loading = useSelector(isLoading)
    const items = useSelector(allNotices);
  
    useEffect(() => {
      dispatch(getAllNotices());
    }, [dispatch]);
  
    return (
      <Container>
        {loading && <Loader/>}
        {!loading && (
        <>
        <FavoriteList items={items} />
        </>
        )}
      </Container>
    );
  };

export default Favorite;