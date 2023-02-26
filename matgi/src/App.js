import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RestaurantMap from './pages/restaurant/RestaurantMap';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<RestaurantMap />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
