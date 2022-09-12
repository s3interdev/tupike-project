import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import Create from './pages/create/create';
import Search from './pages/search/search';
import Recipe from './pages/recipe/recipe';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route index element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/search" element={<Search />} />
					<Route path="/recipe/:id" element={<Recipe />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
