import React from 'react';
import PropTypes from 'prop-types';

import Shot from './Shot';

function getAuthor(authorId, authors) {
  let author = authors.find(item => authorId === item.id);
  if (typeof author === 'undefined') {
    author = {
      id: 1,
      avatar: 'img/avatar-default.gif',
      name: ''
    };
  }
  return author;
}

const ShotList = ({shots, authors}) => {
  const items = shots.map(shot =>
    <Shot
      shot={shot}
      author={getAuthor(shot.authorId, authors)}
      key={shot.id}
    />
  );

  return (
    <div className="shot-list">
      {items}
    </div>
  );
};

ShotList.propTypes = {
  shots: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired
};

export default ShotList;