// Projects.js
import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    { name: 'E-Shop', url: 'https://abdullah-siddique.github.io/E-Shop/' }, // Adjust the URL based on your local setup
    // Add more projects as needed
  ];

  const openProjectView = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="projects-container">
      <h2 className="center">Projects</h2>
      <div className="go-back-container">
        <Link to="/" className="go-back-link">Go Back</Link>
      </div>
      <div className="project-list">
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <div className="project-name-box project-name">{project.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="view-button">
        <button onClick={() => openProjectView(projects[0].url)}>View</button> {/* Adjust the index as needed */}
      </div>
    </div>
  );
};

export default Projects;