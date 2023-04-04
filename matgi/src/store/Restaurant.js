import garden from '../assets/garden.png';
import kakao_png from '../assets/kakao.png';
import park from '../assets/park.png';
import pond from '../assets/pond.png';

const { kakao } = window;

const Restaurants = [
	{
		id: 0,
		title: '카카오',
		latlng: new kakao.maps.LatLng(33.450705, 126.570677),
		image: kakao_png,
	},
	{
		id: 1,
		title: '생태연못',
		latlng: new kakao.maps.LatLng(33.450936, 126.569477),
		image: pond,
	},
	{
		id: 2,
		title: '텃밭',
		latlng: new kakao.maps.LatLng(33.450879, 126.56994),
		image: garden,
	},
	{
		id: 3,
		title: '근린공원',
		latlng: new kakao.maps.LatLng(33.451393, 126.570738),
		image: park,
	},
];

export { Restaurants };
