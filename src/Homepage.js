import devvid from '../src/Video/devvid.mp4';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
import Blogs from './components/Blogs';
import DevTeam from './components/DevTeam';
import ReactPlayer from "react-player";
import Car from './components/Car';
import Chatbot from 'react-chatbot-kit';
import Login from './components/login';
import ChatBot from './components/ChatBot';
import SimpleForm from './components/ChatBot';


function Homepage() {

// chatbot 



  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="Homepage">
    
   
 
     <Blogs/> 
      <Header countCartItems={cartItems.length}></Header>
   
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
     
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket> <br></br>
       
      </div>
      <DevTeam></DevTeam>
      <div className='vid'>
      <video src={devvid} autoPlay loop muted/>

<div className='carHead'>Gallery</div>
      </div>
<Car></Car>

 


    </div>
  );
}

export default Homepage;


