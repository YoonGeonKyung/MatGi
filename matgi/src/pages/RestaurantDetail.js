import { useNavigate, useParams } from 'react-router';
import { Restaurants } from '../store/Restaurant';

const RestaurantDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const restaurant = Restaurants.find(rest => {
		return rest.id == id;
	});

	console.log(id);

	return (
		<div>
			<h2>{restaurant.title}</h2>
			<button onClick={() => navigate(-1)}>Back</button>
		</div>
	);
};

export default RestaurantDetail;
