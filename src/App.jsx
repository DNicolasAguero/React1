import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import ProductsView from './view/ProductsView/ProductsView';
import HomeView from './view/ProductsView/HomeView';
import ContactView from './view/ProductsView/ContactView';
import ProductView from './view/ProductsView/ProductView';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomeView/>} />
        <Route exact path="/products" element={<ProductsView/>} />
        <Route exact path="/contact" element={<ContactView/>} />
        <Route exact path="/product/:id" element={<ProductView/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
