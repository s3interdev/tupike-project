import { useTheme } from '../hooks/useTheme';

const themeColors = ['#58249C', '#249C6B', '#B70233'];

const ThemeSelector = () => {
	const { changeColor } = useTheme();

	return (
		<div className="theme-selector">
			<div className="theme-buttons">
				{themeColors.map((color) => (
					<div
						key={color}
						onClick={() => changeColor(color)}
						style={{ background: color }}
					/>
				))}
			</div>
		</div>
	);
};

export default ThemeSelector;
