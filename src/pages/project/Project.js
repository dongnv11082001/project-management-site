import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import useDocument from '../../hooks/useDocument'

// components
import ProjectSummary from './ProjectSummary'
import ProjectComments from './ProjectComments'

export default function Project() {
    const { id } = useParams()
    const { document, error } = useDocument('projects', id)

    if (error) {
        return <div className='error'>{error}</div>
    }

    if (!document) {
        return <div className='loading'>Loading...</div>
    }

    return (
      <Container className='project-details'>
        <ProjectSummary project={document} />
        <ProjectComments project={document} />
      </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: start;
    grid-gap: 60px;
`;
