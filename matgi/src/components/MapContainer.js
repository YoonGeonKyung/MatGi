import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { inputState, mapLatLng } from '../store/atom';

const { kakao } = window;
const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

const MapContainer = props => {
	const keyword = useRecoilValue(inputState);
	const location = useRecoilValue(mapLatLng);

	useEffect(() => {
		const mapContainer = document.getElementById('myMap');
		const mapOptions = {
			center: new kakao.maps.LatLng(location.x, location.y),
			draggable: false,
			level: 3,
		};
		const map = new kakao.maps.Map(mapContainer, mapOptions);

		const geocoder = new kakao.maps.services.Geocoder();

		for (var i = 0; i < props.Restaurants.length; i++) {
			// 마커 이미지의 이미지 크기 입니다
			const imageSize = new kakao.maps.Size(24, 35);

			// 마커 이미지를 생성합니다
			const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

			// 결과값으로 받은 위치를 마커로 표시합니다
			const marker = new kakao.maps.Marker({
				map: map,
				position: new kakao.maps.LatLng(
					props.Restaurants[i].REFINE_WGS84_LAT,
					props.Restaurants[i].REFINE_WGS84_LOGT,
				),
				title: props.Restaurants[i].RESTRT_NM,
				image: markerImage,
			});
		}

		// 주소로 좌표를 검색합니다
		geocoder.addressSearch(keyword, function (result, status) {
			// 정상적으로 검색이 완료됐으면
			if (status === kakao.maps.services.Status.OK) {
				const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
				console.log(result);

				// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
				map.setCenter(coords);
			}
		});
	}, [keyword]);

	console.log(location);

	return (
		<div>
			<div id="myMap" style={{ width: '100%', height: '500px' }}></div>
		</div>
	);
};

export default MapContainer;
