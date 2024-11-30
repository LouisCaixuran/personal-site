import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
      </header>
      <h4 className="author">{data.author}</h4>
      <h4 className="year">{data.year}</h4>
      <h4 className="publisher">{data.publisher}</h4>
      <a href={data.link}><h4 className="link">{data.link}</h4></a>

    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    link: PropTypes.string,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
