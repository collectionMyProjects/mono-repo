import { style } from '@vanilla-extract/css';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { box } from 'variables';

export const BaseStyle = style({
	padding: 0,
	margin: 0,

	// @ts-ignore
	'&:focus-visible': {
		outline: 'none',

		boxShadow: box.shadows.outline,
	},
});

const MarginAndPaddingProperties = defineProperties({
	properties: {
		marginTop: box.spacing,
		marginRight: box.spacing,
		marginBottom: box.spacing,
		marginLeft: box.spacing,
		paddingTop: box.spacing,
		paddingRight: box.spacing,
		paddingBottom: box.spacing,
		paddingLeft: box.spacing,
	},
	shorthands: {
		margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
		padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
		marginX: ['marginLeft', 'marginRight'],
		marginY: ['marginTop', 'marginBottom'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
	},
});

const BorderStyleProperties = defineProperties({
	properties: {
		borderRadius: box.radius,
	},
});

const BoxShadowStyleProps = defineProperties({
	properties: {
		boxShadow: box.shadows,
	},
});

export const StyleSprinkles = createSprinkles(
	MarginAndPaddingProperties,
	BorderStyleProperties,
	BoxShadowStyleProps,
);
