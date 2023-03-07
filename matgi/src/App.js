import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RestaurantMap from './pages/restaurant/RestaurantMap';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<RestaurantMap />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
