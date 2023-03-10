import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { inputState } from '../store/atom';

const { kakao } = window;

const MapContainer = () => {
	const keyword = useRecoilValue(inputState);

	useEffect(() => {
		const mapContainer = document.getElementById('myMap');
		const mapOptions = {
			center: new kakao.maps.LatLng(37.566826, 126.9786567),
			level: 3,
		};
		const map = new kakao.maps.Map(mapContainer, mapOptions);
		const ps = new kakao.maps.services.Places();
		const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

		searchPlaces();

		function searchPlaces() {
			if (!keyword.replace(/^\s+|\s+$/g, '')) {
				alert('키워드를 입력해주세요!');
				return false;
			}

			ps.keywordSearch(keyword, placesSearchCB);
		}

		function placesSearchCB(data, status, pagination) {
			if (status === kakao.maps.services.Status.OK) {
				const bounds = new kakao.maps.LatLngBounds();

				for (var i = 0; i < data.length; i++) {
					displayMarker(data[i]);
					bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}

				map.setBounds(bounds);
			}
		}

		function displayMarker(place) {
			const marker = new kakao.maps.Marker({
				map: map,
				position: new kakao.maps.LatLng(place.y, place.x),
			});

			kakao.maps.event.addListener(marker, 'click', function () {
				infowindow.setContent(
					'<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>',
				);
				infowindow.open(map, marker);
			});
		}
	}, [keyword]);

	return (
		<div>
			<h2>검색 지도</h2>
			<div id="myMap" style={{ width: '100%', height: '500px' }}></div>
		</div>
	);
};

export default MapContainer;
