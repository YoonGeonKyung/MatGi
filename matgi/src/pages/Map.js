import { useRecoilValue } from 'recoil';
import InputForm from '../components/InputForm';
import MapContainer from '../components/MapContainer';
import RestaurantInform from '../components/RestaurantInform';

import { Restaurants } from '../store/Restaurant';
import { mapLatLng } from '../store/atom';

const Map = () => {
	const location = useRecoilValue(mapLatLng);
	const filteredRestaurants = Restaurants.filter(
		restaurant =>
			(restaurant.REFINE_WGS84_LAT - location.y) ** 2 +
				(restaurant.REFINE_WGS84_LOGT - location.x) ** 2 <=
			0.0001,
	);
	return (
		<div>
			<InputForm />
			<RestaurantInform Restaurants={filteredRestaurants} />
			<MapContainer Restaurants={filteredRestaurants} />
		</div>
	);
};

export default Map;
