import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// components
import Avatar from './Avatar'

export default function ProjectList({ projects }) {
    return (
        <Container className='project-list'>
            {projects.length === 0 && <p>No projects yet</p>}
            {projects && projects.map(project => (
                <Link to={`/projects/${project.id}`} key={project.id}>
                    <h4>{project.name}</h4>
                    <p>Due by {project.dueDate.toDate().toDateString()}</p>    
                    <div className='assigned-to'>
                        <ul>
                            {project.assignedUsersList.map(user => (
                                <li key={user.id}>
                                    <Avatar src={user.photoURL} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </Link>
            ))}
        </Container>
    )
}

const Container = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 20px;

  & a {
    background-color: #fff;
    padding: 16px;
    border-radius: 6px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    color: inherit;
  }
  
  & h4 {
    font-size: 0.9em;
    color: var(--heading-color);
  }
  & p {
    color: var(--text-color);
    font-size: 0.9em;
  }
  & .assigned-to {
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid #eee;
  }
  & ul {
    margin: 10px 0;
    display: flex;
  }
  & li {
    margin-right: 10px;
  }
  & .avatar {
    width: 30px;
    height: 30px;
  }
`;