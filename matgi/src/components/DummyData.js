import garden from '../assets/garden.png';
import kakao_png from '../assets/kakao.png';
import park from '../assets/park.png';
import pond from '../assets/pond.png';
import MapContainer from './MapContainer';

const { kakao } = window;

const Dummy = [
	{
		title: '카카오',
		latlng: new kakao.maps.LatLng(33.450705, 126.570677),
		image: kakao_png,
	},
	{
		title: '생태연못',
		latlng: new kakao.maps.LatLng(33.450936, 126.569477),
		image: pond,
	},
	{
		title: '텃밭',
		latlng: new kakao.maps.LatLng(33.450879, 126.56994),
		image: garden,
	},
	{
		title: '근린공원',
		latlng: new kakao.maps.LatLng(33.451393, 126.570738),
		image: park,
	},
];

const DummyData = () => {
	return (
		<div>
			{Dummy.map(dum => (
				<>
					<img src={dum.image} />
					<div>{dum.title}</div>
				</>
			))}
			<MapContainer dummy={Dummy} />
		</div>
	);
};

export default DummyData;
