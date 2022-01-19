import React, { useState } from 'react';
import ProjectList from '../../components/ProjectList';
import { useCollection } from '../../hooks/useCollection';
import ProjectFilters from './ProjectFilters';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Dashboard() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('projects');
  const [currentFilter, setCurrentFilter] = useState('all');

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const filteredProjects = documents
    ? documents.filter((doc) => {
        switch (currentFilter) {
          case 'all':
            return true;
          case 'mine':
            let assignedToMe = false;
            doc.assignedUsersList.forEach((_user) => {
              if (user.uid === _user.id) assignedToMe = true;
            });
            return assignedToMe;
          case 'development':
          case 'design':
          case 'sales':
          case 'marketing':
            return currentFilter === doc.category;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilters
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {documents && <ProjectList projects={filteredProjects} />}
    </div>
  );
}
