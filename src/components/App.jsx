import {lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'))
const Catalog = lazy(()=> import('../pages/Catalog/Catalog'))
const Favorite = lazy(() => import("../pages/Favorites/Favorites"))


const App = () => {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route exact index element = {<Home />}/>
           <Route path ="/catalog" element={<Catalog/>}/>
           <Route path="/favorite" element={<Favorite/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App