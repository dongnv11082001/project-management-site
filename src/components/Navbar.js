import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

// images
import Temple from '../assets/temple.svg'

export default function Navbar() {
    return (
      <NavbarContainer className='navbar'>
        <List>
          <Logo className="logo">
            <img src={Temple} alt="logo" />
            <span>The Dojo</span>
          </Logo>

          <li>
            <Link to={'/login'}>Login</Link>
          </li>
          <li>
            <Link to={'/signup'}>Signup</Link>
          </li>
          <li>
              <button className='btn'>Logout</button>
          </li>
        </List>
      </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  box-sizing: border-box;
  margin-bottom: 80px;

  & a {
    color: #333;
    text-decoration: none;
    margin-right: 20px;
  }
`;

const List = styled.ul`
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: flex-end;
`

const Logo = styled.li`
  font-weight: bold;
  color: var(--heading-color);
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  margin-right: auto;

  & img {
    margin-right: 10px;
    filter: invert(25%);
    width: 36px;
    margin-top: -8px;
  }
`;