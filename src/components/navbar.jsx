import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import SearchBar from './search-bar';

const Navbar = () => {
	const { color, changeColor } = useTheme();

	return (
		<div className="navbar" style={{ background: color }}>
			<nav onClick={() => changeColor('pink')}>
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
