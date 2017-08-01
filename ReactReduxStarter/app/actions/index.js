import { REQUEST_SHOTS, RECEIVE_SHOTS } from './actionTypes';

function requestShots() {
	return {
		type: REQUEST_SHOTS
	};
}

function receiveShots(shots) {
	return {
		type: RECEIVE_SHOTS,
		shots
	};
}

export function loadShots() {
	return function(dispatch) {
		$.ajax('https://api.dribbble.com/v1/shots?access_token=d4499499dc24c13c70df224a546ab8d2205c649e4bb95a49f55f195b08b5ff4c', {
			error: (xhr, status, error) => {

			},
			success: (data, status, xhr) => {
				const shots = data.map(item => {
					return {
						id: item.id,
						htmlUrl: item.html_url,
						images: item.images
					}
				});
				dispatch(receiveShots(shots));
			}
		});
	};
}