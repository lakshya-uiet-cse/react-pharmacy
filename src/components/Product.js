import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
    
    
      <h3>{product.name}</h3>
     <span>{product.desc}</span>


      <div>₹{product.price}</div>
      <div className='alignbtn'>
        <button className='btnclick' onClick={() => onAdd(product)} >Add To Cart</button>
        <hr></hr>
      </div>
    </div>
  );
}
