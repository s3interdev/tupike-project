import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home/home';
import Create from './pages/create/create';
import Search from './pages/search/search';
import Recipe from './pages/recipe/recipe';
import ThemeSelector from './components/theme-selector';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<ThemeSelector />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route index element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/search" element={<Search />} />
					<Route path="/recipes/:id" element={<Recipe />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
