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
    display:flex;
    flex-direction: row;
    width:200px;
    max-width: 100vw;
    justify-content: space-between;
    align-items: center;
`

export const NameAndPrice = styled.p`
    color: ${prop => prop.isPrice ? 'red':'white'};
    font-size: 18px;
`