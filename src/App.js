
import {Routes, Route} from "react-router-dom"
import Home from './Componet/Home';
import About from './Componet/About';
import Product from './Componet/Products';
import Work from "./Componet/SingleProduct"
import Contact from './Componet/Contact';
import Error from './Componet/Error';
import Header from "./Componet/Header";
import Footer from "./Componet/Footer"

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
