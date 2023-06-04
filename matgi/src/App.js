import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import Map from './pages/Map';
import RestaurantDetail from './pages/RestaurantDetail';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import MyPick from './pages/MyPick';

function App() {
	return (
		<div className="App">
			<RecoilRoot>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search/*" element={<Map />} />
						<Route path="/restaurant/:RESTRT_NM" element={<RestaurantDetail />} />
						<Route path="/login" element={<Login />} />
						<Route path="/my" element={<MyPick />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</RecoilRoot>
		</div>
	);
}

export default App;
