import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Home from './components/Home';

function App() {
	return (
		<BrowserRouter>
			<div className="bg-gray-200 h-screen relative">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/quiz" element={<Quiz />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
