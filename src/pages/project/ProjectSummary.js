import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '../../components/Avatar'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';

export default function ProjectSummary({ project }) {
    const { user } = useAuthContext()
    const { deleteDocument } = useFirestore('projects')
    const navigate = useNavigate()

    const handleClick = async () => {
      deleteDocument(project.id)
      navigate('/')
    }

    return (
      <Container className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>By {project.createdBy.displayName}</p>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
        { user.uid === project.createdBy.id &&
          <button className='btn' onClick={handleClick}>Mark as complete</button>
        }
      </Container>
    );
}

const Container = styled.div`
    background-color: #fff;
    padding: 30px;
    border-radius: 4px;

  & .due-date {
    margin: 10px 0;
    font-size: 0.9em;
    color: var(--title-color);
  }
  & .details {
    margin: 30px 0;
    color: var(--text-color);
    line-height: 1.8em;
    font-size: 0.9em;
  }
  & h4 {
    color: var(--text-color);
    font-size: 0.9em;
  }
  & .assigned-users {
    display: flex;
    margin-top: 20px;
  }
  & .assigned-users .avatar {
    margin-right: 10px;
  }
  & + .btn {
    margin-top: 20px;
  }
`;
