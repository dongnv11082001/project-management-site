import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// images
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';

// components
import Avatar from './Avatar';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Sidebar() {
  const { user } = useAuthContext()

  return (
    <SidebarContainer className="sidebar">
      <SidebarContent className="sidebar-content">
        <User className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </User>
        <SidebarLinks className="links">
          <ul>
            <li>
              <NavLink to={'/'}>
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
              <NavLink to={'/create'}>
                <img src={AddIcon} alt="add icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </SidebarLinks>
      </SidebarContent>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 300px;
  min-width: 300px;
  background: var(--primary-color);
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  color: #fff;
`;

const SidebarContent = styled.div`
  position: fixed;
  width: inherit;
`;

const User = styled.div`
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  padding: 40px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const SidebarLinks = styled.nav`
    margin-top: 80px;
    margin-left: 20px;
    
  & li {
    margin-top: 10px;
  }
  & a {
    display: flex;
    padding: 10px;
    text-decoration: none;
    width: 100%;
    color: #fff;
    box-sizing: border-box;
  }
  & img {
    margin-right: 10px;
    filter: invert(100%);
  }
  & a.active {
    color: #555;
    background: var(--bg-color);
    border-radius: 20px 0 0 20px;
  }
  & .active img {
    filter: invert(40%);
  }
`;
