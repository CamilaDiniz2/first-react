import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div` 
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
  background-color: #63dc3e;
  padding-bottom: 32px;
`; 

export const Title = styled.h1`
  padding-top: 32px;
  text-align: center;
  font-size: 36px;
  font-family: sans-serif;
  color: rgb(82, 18, 131);

  margin-bottom: 64px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin : 32px 64px;
  font-size: 22px;
  color: #63dc3e;
  background: rgb(82, 18, 131);
  padding: 16px;
`;

export const LinkHome = styled(Link)`
  background: rgb(82, 18, 131);
  
  color: #63dc3e;
  font-size: 24px;
  text-decoration: none;
  text-align: center;
  
  display: block;
  width: 150px;
  margin: 16px auto;

  padding: 8px 16px;
  border-radius: 8px;

  &:hover{
    width: 200px;
    transition: 600ms;
  }
`;