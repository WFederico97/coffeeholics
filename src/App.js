import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHeader from './Components/Header/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomeSection from './Pages/Home/Home';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <>
      <Router>

        <div className=' d-flex justify-content-center'>
          <NavbarHeader />
        </div>

        <Routes>
          <Route path='/' element={<HomeSection />} />
          <Route path='/shop' element={<ItemListContainer greeting={'¡Bienvenidos/as al shop de Coffeeholics!'} />} />
          <Route path='/category/:tipo' />
          <Route path='/producto/:id' />
        </Routes>

        <footer>
          <Footer />
        </footer>

      </Router>



    </>
  );
}

export default App;
