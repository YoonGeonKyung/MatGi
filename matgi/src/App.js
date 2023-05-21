import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import Map from './pages/Map';
import RestaurantDetail from './pages/RestaurantDetail';

function App() {
	return (
		<div className="App">
			<RecoilRoot>
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search/*" element={<Map />} />
						<Route path="/restaurant/:RESTRT_NM" element={<RestaurantDetail />} />
					</Routes>
				</BrowserRouter>
				<Footer />
			</RecoilRoot>
		</div>
	);
}

export default App;
