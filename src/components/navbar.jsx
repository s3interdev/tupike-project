import { Link } from 'react-router-dom';
import SearchBar from './search-bar';

const Navbar = () => {
	return (
		<div className="navbar">
			<nav>
				<Link to="/" className="brand">
					<h1>Tupike</h1>
				</Link>
				<SearchBar />
				<Link to="/create">Create Recipe</Link>
			</nav>
		</div>
	);
};

export default Navbar;
