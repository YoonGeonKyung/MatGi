import { NavLink } from 'react-router-dom';
import { Restaurants } from '../store/Restaurant';

const RestaurantInform = () => {
	return (
		<div>
			{Restaurants.map(restaurant => (
				<li key={restaurant.id}>
					<h2>{restaurant.title}</h2>
					<NavLink to={'/restaurant/' + restaurant.id}>
						<img src={restaurant.image} />
					</NavLink>
				</li>
			))}
		</div>
	);
};

export default RestaurantInform;
