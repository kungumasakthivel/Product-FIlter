import React from 'react';
import {v4 as uuidv4} from 'uuid'
import {ProdcutsDiv, NameAndPrice, ListDiv} from '../../Styledapp.js'

const ProductList = ({ products }) => {
  return (
    <ProdcutsDiv>
      {products.map(product => (
        <ListDiv key={uuidv4()}>
          <NameAndPrice>{product.name}</NameAndPrice>
          <NameAndPrice isPrice={true}>Price: ${product.price}</NameAndPrice>
        </ListDiv>
      ))}
    </ProdcutsDiv>
  );
};

export default ProductList;