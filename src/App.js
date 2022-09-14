import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHeader from './Components/Header/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomeSection from './Pages/Home/Home';



function App() {
  return (
    <>
      <Router>

        <div className=' d-flex justify-content-center'>
          <NavbarHeader />
        </div>

        <Routes>
          <Route path='/' element={<HomeSection />} />
          <Route path='/shop' />
          <Route path='/category/:tipo' />
          <Route path='/item/:id' />
        </Routes>

        <footer>
          <Footer />
        </footer>

      </Router>



    </>
  );
}

export default App;
