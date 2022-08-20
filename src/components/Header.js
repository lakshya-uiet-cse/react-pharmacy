import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login';
import Register from './register';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
      <br></br>    <h1 className='hding'>Our Products</h1>  <br></br> 
      
        </a>
      </div>
      <div>
        <a href="#/cart">

          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
     {/* <Link to="/Register">SignIn</Link> */}
     {/* <a href='/Register'>SignIn</a> */}

        
      </div>
    </header>
  );
}
