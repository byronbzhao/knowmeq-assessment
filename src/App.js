import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';


function App() {
	return (
		<BrowserRouter>
			<div className="bg-gray-200 h-screen relative">
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/quiz" element={<Quiz />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
