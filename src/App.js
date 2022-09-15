import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHeader from './Components/Header/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomeSection from './Pages/Home/Home';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './Context/CartContext';
import Cart from './Components/Cart/Cart';



function App() {
  return (
    <>
      <Router>
        <CartProvider>
          
          <div className=' d-flex justify-content-center'>
            <NavbarHeader />
          </div>

          <Routes>
            <Route path='/' element={<HomeSection />} />
            <Route path='/shop' element={<ItemListContainer greeting={'¡Bienvenidos/as al shop de Coffeeholics!'} />} />
            <Route path='/category/:tipo' element={<ItemListContainer greeting={'¡Bienvenidos/as al shop de Coffeeholics!'} />} />
            <Route path='/producto/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

          <footer>
            <Footer />
          </footer>

        </CartProvider>
      </Router>



    </>
  );
}

export default App;
