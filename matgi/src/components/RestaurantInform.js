import { NavLink } from 'react-router-dom';

const RestaurantInform = props => {
	return (
		<div>
			{props.Restaurants.map((restaurant, index) => (
				<li key={index}>
					<h2>{restaurant.RESTRT_NM}</h2>
					<NavLink to={'/restaurant/' + restaurant.RESTRT_NM}>Go Detail Page</NavLink>
				</li>
			))}
		</div>
	);
};

export default RestaurantInform;
