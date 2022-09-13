import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/theme-context';
import SearchBar from './search-bar';

const Navbar = () => {
	const { color } = useContext(ThemeContext);

	return (
		<div className="navbar" style={{ background: color }}>
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
