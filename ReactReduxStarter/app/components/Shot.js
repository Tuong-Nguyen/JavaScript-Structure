import React from 'react';
import PropTypes from 'prop-types';

const Shot = ({shot}) => (
	<div className="shot">
		<a href={shot.htmlUrl}>
			<img src={shot.images.normal}/>
		</a>
	</div>
);

Shot.propTypes = {
	shot: PropTypes.shape({
		id: PropTypes.number.isRequired,
		htmlUrl: PropTypes.string.isRequired,
		images: PropTypes.shape({
			normal: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

export default Shot;