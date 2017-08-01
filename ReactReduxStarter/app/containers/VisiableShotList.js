import React from 'react';
import { connect } from 'react-redux';

import ShotList from '../components/ShotList';

const mapStateToProps = (state) => {
	return {
		shots: state.shots
	};
};

const VisiableShotList = connect(
	mapStateToProps
)(ShotList);

export default VisiableShotList;