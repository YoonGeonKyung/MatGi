import { useNavigate, useParams } from 'react-router';
import { Restaurants } from '../store/Restaurant';
import { mapLatLng } from '../store/atom';
import { useRecoilValue } from 'recoil';

const RestaurantDetail = () => {
	const { RESTRT_NM } = useParams();
	const navigate = useNavigate();
	const location = useRecoilValue(mapLatLng);

	const filteredRestaurant = Restaurants.filter(
		restaurant =>
			restaurant.RESTRT_NM == RESTRT_NM &&
			(restaurant.REFINE_WGS84_LAT - location.y) ** 2 +
				(restaurant.REFINE_WGS84_LOGT - location.x) ** 2 <=
				0.0001,
	);

	console.log(RESTRT_NM);
	console.log(filteredRestaurant);

	return (
		<div>
			<h2>도시 : {filteredRestaurant[0].SIGUN_NM}</h2>
			<h2>가게 이름 : {filteredRestaurant[0].RESTRT_NM}</h2>
			<h2>전화번호 : {filteredRestaurant[0].TASTFDPLC_TELNO}</h2>
			<h2>대표 음식 : {filteredRestaurant[0].REPRSNT_FOOD_NM}</h2>
			<h2>우편 번호 : {filteredRestaurant[0].REFINE_ZIPNO}</h2>
			<h2>도로명 주소 : {filteredRestaurant[0].REFINE_ROADNM_ADDR}</h2>
			<h2>지번 주소 : {filteredRestaurant[0].REFINE_LOTNO_ADDR}</h2>
			<button onClick={() => navigate(-1)}>Back</button>
		</div>
	);
};

export default RestaurantDetail;
