import * as theme from '../dist/index.js';
import fs from 'fs';

const generateColorTokenVariables = () => {
	let cssString = ':root {\n';

	Object.entries(theme.vars.colors).forEach(([colorName, colorValues]) => {
		Object.entries(colorValues).forEach(([shade, shadeValue]) => {
			const cssVarName = `--${colorName}-${shade}`;
			cssString += `  ${cssVarName}: ${shadeValue};\n`;
		});
	});

	cssString += '}\n\n';

	return cssString;
};

const generateFontsVariables = () => {
	let cssString = ':root {\n';

	Object.entries(theme.vars.fonts.fontSize).forEach(([size, value]) => {
		cssString += `  --font-size-${size}: ${value};\n`;
	});

	Object.entries(theme.vars.fonts.fontWeight).forEach(([weight, value]) => {
		cssString += `  --font-weight-${weight}: ${value};\n`;
	});

	Object.entries(theme.vars.fonts.lineHeight).forEach(([height, value]) => {
		cssString += `  --line-height-${height}: ${value};\n`;
	});

	cssString += '}\n\n';
	return cssString;
};

const generateFontsClass = () => {
	let cssString = '';

	Object.entries(theme.classes.fontG.head).forEach(
		([size, { fontSize, fontWeight, lineHeight }]) => {
			cssString += `.head${size} {\n`;
			cssString += `  font-size: ${fontSize};\n`;
			cssString += `  font-weight: ${fontWeight};\n`;
			cssString += `  line-height: ${lineHeight};\n`;
			cssString += '}\n\n';
		},
	);

	Object.entries(theme.classes.fontG.text).forEach(
		([size, { fontSize, fontWeight, lineHeight }]) => {
			cssString += `.text${size} {\n`;
			cssString += `  font-size: ${fontSize};\n`;
			cssString += `  font-weight: ${fontWeight};\n`;
			cssString += `  line-height: ${lineHeight};\n`;
			cssString += '}\n\n';
		},
	);

	return cssString;
};

const generateThemeCss = () => {
	const variablesColors = generateColorTokenVariables();
	const variablesFonts = generateFontsVariables();
	const fontsClass = generateFontsClass();

	fs.writeFileSync(
		'dist/themes.css',
		variablesColors + variablesFonts + fontsClass,
	);
};

generateThemeCss();
