import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	min-height: 100%;
	padding-bottom: 65px;
`;
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
		<Wrapper>
			<Header />
			<h1>맛집 지도</h1>
			<div id="map" style={{ width: '500px', height: '500px' }}></div>
			<Footer />
		</Wrapper>
	);
};

export default RestaurantMap;
