import React from 'react'
import styled from 'styled-components'
import { useCollection } from '../hooks/useCollection'

// components
import Avatar from './Avatar'

export default function OnlineUsers() {
    const { documents, error } = useCollection('users')

    return (
        <Container>
            <Title>All Users</Title>
            {error && <div className='error'>{error}</div>}
            {documents && documents.map(user => (
                <Item key={user.id}>
                    {user.onlineStatus && <Online className='online'></Online>}
                    <span>{user.displayName}</span>
                    <Avatar src={user.photoURL} />
                </Item>
            ))}
        </Container>
    )
}

const Container = styled.div`
  width: 250px;
  min-width: 250px;
  padding: 30px;
  box-sizing: border-box;
  background: #fbfbfb;
  color: var(--heading-color);
`;

const Title = styled.h2`
  text-align: right;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  font-size: 1.2em;
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px auto;
  & .avatar {
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }
`;

const Online = styled.div`
  display: inline-block;
  margin-right: 10px;
  width: 12px;
  height: 12px;
  background: #0ebb50;
  border-radius: 50%;
  margin-top: 2px;
`;