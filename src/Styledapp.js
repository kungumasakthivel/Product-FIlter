import styled from 'styled-components';

export const PageContainer = styled.div `
    max-height: 100vh;
    max-width: 100vw;
    background-color: #000;
    color: white;
    display: flex;
    flex-direction: column;
    width: 500px;
    max-width: 100vw;
    align-items: center;
    border-radius: 12px;
`

export const InputDiv = styled.div`
    display:flex;
    flex-direction: column;
    width: 30vw;
    max-width: 100vw;
`

export const Heading = styled.h2`
    font-weight: bold;
    font-family: sans-serif;
    text-align: center;
`

export const Input = styled.input`
    border-radius: 4px;
    height: 20px;
`

export const Button = styled.button`
    padding: 2px 2px 2px 2px;
`

export const ProdcutsDiv = styled.div`
    width:300px;
    max-width: 100vw;
    height: 400px;
    max-height: 400px
    justify-content: space-between;
    align-items: center;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 4px;
        height: 0px;
    }
    &::-webkit-scrollbar-track {
        background: #aaa; 
    }
    &::-webkit-scrollbar-thumb {
        background-color: #888; 
        border-radius: 10px; 
        border: 3px solid #f1f1f1; 
    }
    &::-webkit-scrollbar-thumb:hover {
       background-color: #555; /* Color when hovering over the scrollbar thumb */
    }
`

export const ListDiv = styled.div`
    display: flex;
    flex-direaction: row;
    align-items: center;
    justify-content: space-around;
    width:300px;
    max-width: 100vw;
`

export const NameAndPrice = styled.p`
    color: ${prop => prop.isPrice ? 'red':'white'};
    font-size: 18px;
`