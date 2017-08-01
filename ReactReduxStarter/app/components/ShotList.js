import React from 'react';
import PropTypes from 'prop-types';

import Shot from './Shot';

const ShotList = ({shots}) => {
	let shotNodes = shots.map(shot => <Shot shot={shot} key={shot.id}/>);

	return (
		<div className="shot-list">
			{shotNodes}
		</div>
	);
}

ShotList.propTypes = {
	shots: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		htmlUrl: PropTypes.string.isRequired,
		images: PropTypes.shape({
			normal: PropTypes.string.isRequired
		}).isRequired
	}).isRequired).isRequired,
};

export default ShotList;