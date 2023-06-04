import { useParams } from 'react-router';
import { Restaurants } from '../store/Restaurant';
import { mapLatLng } from '../store/atom';
import { useRecoilValue } from 'recoil';

const RestaurantDetail = () => {
	const { RESTRT_NM } = useParams();
	const location = useRecoilValue(mapLatLng);
	const user = localStorage.getItem('user');

	const filteredRestaurant = Restaurants.filter(
		restaurant =>
			restaurant.RESTRT_NM === RESTRT_NM &&
			(restaurant.REFINE_WGS84_LAT - location.y) ** 2 +
				(restaurant.REFINE_WGS84_LOGT - location.x) ** 2 <=
				0.0001,
	);

	const addClickHandler = () => {
		const existingArray = localStorage.getItem('myWish');
		const newArray = existingArray ? JSON.parse(existingArray) : [];
		newArray.push(filteredRestaurant[0]);
		localStorage.setItem('myWish', JSON.stringify(newArray));
	};

	return (
		<div>
			<h2>도시 : {filteredRestaurant[0].SIGUN_NM}</h2>
			<h2>가게 이름 : {filteredRestaurant[0].RESTRT_NM}</h2>
			<h2>전화번호 : {filteredRestaurant[0].TASTFDPLC_TELNO}</h2>
			<h2>대표 음식 : {filteredRestaurant[0].REPRSNT_FOOD_NM}</h2>
			<h2>우편 번호 : {filteredRestaurant[0].REFINE_ZIPNO}</h2>
			<h2>도로명 주소 : {filteredRestaurant[0].REFINE_ROADNM_ADDR}</h2>
			<h2>지번 주소 : {filteredRestaurant[0].REFINE_LOTNO_ADDR}</h2>
			{user && <button onClick={addClickHandler}>찜 등록</button>}
		</div>
	);
};

export default RestaurantDetail;
