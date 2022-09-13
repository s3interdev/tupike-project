import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
	if (recipes.length === 0) {
		return (
			<div className="error">
				Sorry, there are no recipes with that search term to load...
			</div>
		);
	}

	return (
		<div className="recipe-list">
			{recipes.map((recipe) => (
				<div key={recipe.id} className="card">
					<h3>{recipe.title}</h3>
					<p>{recipe.cookingTime} to make</p>
					<div className="line-clamp-2">{recipe.method}</div>
					<Link to={`/recipes/${recipe.id}`}>Cook This</Link>
				</div>
			))}
		</div>
	);
};

export default RecipeList;
