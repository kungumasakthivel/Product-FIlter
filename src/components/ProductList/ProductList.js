import React from 'react';
import {v4 as uuidv4} from 'uuid'
import {ProdcutsDiv, NameAndPrice} from '../../Styledapp.js'

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <ProdcutsDiv key={uuidv4()}>
          <NameAndPrice>{product.name}</NameAndPrice>
          <NameAndPrice isPrice={true}>Price: ${product.price}</NameAndPrice>
        </ProdcutsDiv>
      ))}
    </div>
  );
};

export default ProductList;