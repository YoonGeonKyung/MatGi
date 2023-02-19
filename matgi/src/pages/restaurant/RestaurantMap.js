import { useEffect } from 'react';

const { kakao } = window;

const RestaurantMap = () => {
	useEffect(() => {
		const mapContainer = document.getElementById('map');
		const mapOptions = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3,
		};

		const map = new kakao.maps.Map(mapContainer, mapOptions);
	}, []);

	return (
		<div>
			<h1>맛집 지도</h1>
			<div id="map" style={{ width: '500px', height: '500px' }}></div>
		</div>
	);
};

export default RestaurantMap;
