// import logo from './logo.svg';
import React from 'react';
import './App.css';
import{Routes,Route} from 'react-router-dom'
import Home from "./Routing/Home"
// import About from "./Routing/About"
import Navbar from './Routing/Navbar';
import OrderSummary from './Routing/OrderSummary';
import NoMatch from './Routing/NoMatch';
import Product from './Routing/Product';
import FeaturedProduct from './Routing/FeaturedProduct';
import NewProduct from './Routing/NewProduct';

const LazyAbout= React.lazy(()=> import("./Routing/About"))



function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      
        <Route path='/' element={<Home/>}></Route>

        <Route path='/about' element={
          <React.Suspense fallback="Loading......">

        <LazyAbout/>

        </React.Suspense>}>

        </Route>

        <Route path='/order-summary' element={<OrderSummary/>}></Route>

        <Route path='*' element={<NoMatch/>}></Route>

        

        {/* Nested Rounting */}
        <Route path='/product' element={<Product/>}>

          <Route  index  element={<FeaturedProduct/>}/>

            <Route path='featured' element={<FeaturedProduct/>}/>

            <Route path='new' element={<NewProduct/>}/>

        </Route>

        
     </Routes>
   
    </>
  );
}

export default App;
