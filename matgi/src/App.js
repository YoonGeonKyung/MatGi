import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MapContainer from './components/MapContainer';
import InputForm from './components/InputForm';
import { RecoilRoot } from 'recoil';

function App() {
	return (
		<div className="App">
			<RecoilRoot>
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<InputForm />} />
						<Route path="/map" element={<MapContainer />} />
					</Routes>
				</BrowserRouter>
				<Footer />
			</RecoilRoot>
		</div>
	);
}

export default App;
