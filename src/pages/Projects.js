import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Publications"
    description="Learn about Xuran Cai's publications."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">publications</Link></h2>
          <p>A selection of publications that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
