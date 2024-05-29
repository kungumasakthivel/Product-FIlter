import React, { useState } from 'react';
import SortFilter from './components/SortFilter/SortFilter';
import ProductList from './components/ProductList/ProductList';
import {
    PageContainer,
    Heading,
    Input,
    InputDiv,
    Button
} from './Styledapp';

const productsData = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 },
  ];

function App() {
    const [products, setProducts] = useState(productsData);
    const [sortOrder, setSortOrder] = useState('asc');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const onSortChange = (order) => {
        setSortOrder(order);
        const sortedProducts = [...products].sort((a, b) => {
            if(order === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setProducts(sortedProducts);
    };

    const addProduct = () => {
        setProducts((prev) => [
            ...prev, {name, price}
        ]);
        setName('');
        setPrice('');
    }

    return (
        <PageContainer>
            <div>
                <Heading>Add Products</Heading>
                <InputDiv>
                <Input 
                    type='text' 
                    placeholder='Enter a product' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <Input 
                    type='number' 
                    placeholder='Enter a Price' 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}
                />
                </InputDiv>
                <Button onClick={addProduct}>Add</Button>
            </div>
            <SortFilter onSortChange={onSortChange} />
            <ProductList products={products} />
        </PageContainer>
    )
}

export default App;
