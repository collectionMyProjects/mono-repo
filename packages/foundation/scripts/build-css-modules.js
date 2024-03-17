import * as theme from '../dist/index.js';
import fs from 'fs';

const generateThemeCssVariables = () => {
	let cssString = ':root {\n';

	Object.entries(theme.vars.colors).forEach(([colorName, colorValues]) => {
		Object.entries(colorValues).forEach(([shade, shadeValue]) => {
			const cssVarName = `--${colorName}-${shade}`;
			cssString += `  ${cssVarName}: ${shadeValue};\n`;
		});
	});

	cssString += '}';

	return cssString;
};

const generateThemeCss = () => {
	const variables = generateThemeCssVariables();

	fs.writeFileSync('dist/themes.css', variables);
};

generateThemeCss();
