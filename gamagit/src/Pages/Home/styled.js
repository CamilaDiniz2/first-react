import styled from 'styled-components';

export const Body = styled.div`
  background-color: #63dc3e;
  width: 800px;
  height: 400px;
  margin: 128px auto;
  border-radius: 8px;
` 

export const Title = styled.h1`
  color: rgb(115, 26, 183);
  text-align: center;
  padding-top: 64px;
`

export const Input = styled.input`
  width : 400px;
  height: 36px;
  display: block;
  margin: 64px auto 32px auto;

  outline: none;
  border: 1.5px solid rgb(115, 26, 183);

  &::placeholder{
    color: rgb(115, 26, 183);
    font-size: 16px;
    padding-left: 8px;
  }
`

export const Button = styled.button`
  display: block;
  width: 150px;
  height: 48px;

  border: none;

  display: block;
  margin: 0 auto;

  background-color: rgb(115, 26, 183);
  border: none;
  border-radius: 4px;

  cursor: pointer;

  color: #63dc3e;
  font-size: 18px;
  font-weight: bold;

  &:hover{
    width: 250px;
    letter-spacing: 1px;
    transition: 800ms;
  }
`