import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Answer from './components/Answer';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />
					<Link to="/quiz">Start your test</Link>
				<Routes>
					<Route path="/" element={<Answer />} />
					<Route path="/quiz" element={<Quiz />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
