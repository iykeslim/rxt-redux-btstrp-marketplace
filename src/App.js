import './App.css';
import Home from './components/Home.js';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.js';
import Products from './components/Products.js';
import Product from './components/Product.js';


function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/products" element={<Products />}/>
      <Route exact path="/products/:id" element={<Product />}/>
    </Routes>
   </>
  );
}

export default App;
