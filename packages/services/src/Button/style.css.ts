import { recipe } from '@vanilla-extract/recipes';
import { createVar, keyframes } from '@vanilla-extract/css';
import { box, fonts, scale } from 'variables';
import { fontG } from 'classes';

export const enableColorVariant = createVar();
export const hoverColorVariant = createVar();
export const activeColorVariant = createVar();

export const buttonStyle = recipe({
	base: {
		margin: 0,
		padding: 0,
		border: 0,
		background: 'none',

		borderRadius: box.radius.md,
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		userSelect: 'none',
		transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',

		// @ts-ignore
		'&[disabled]': {
			opacity: 0.4,
			cursor: 'not-allowed',
		},
		'&[data-loading="true"]': {
			'& span': {
				opacity: 0,
			},
		},
		'&:focus-visible': {
			outline: 'none',

			boxShadow: box.shadows.outline,
		},
	},
	variants: {
		size: {
			xs: {
				...fontG.text.xs,
				fontWeight: fonts.fontWeight[600],
				padding: '0 0.5rem',
				gap: '0.5rem',
				height: '1.5rem',
			},
			sm: {
				...fontG.text.sm,
				fontWeight: fonts.fontWeight[600],
				padding: '0 0.75rem',
				gap: '0.5rem ',
				height: '2rem',
			},
			md: {
				...fontG.text.md,
				fontWeight: fonts.fontWeight[600],
				padding: '0 1rem',
				gap: '0.5rem',
				height: '2.5rem',
			},
			lg: {
				...fontG.text.lg,
				fontWeight: fonts.fontWeight[600],
				padding: '0 1.5rem',
				gap: '0.5rem',
				height: '3rem',
			},
		},
		variant: {
			solid: {
				backgroundColor: enableColorVariant,
				color: scale.gray[50],

				'&:hover:not([disabled])': {
					backgroundColor: hoverColorVariant,
				},
				'&:active:not([disabled])': {
					backgroundColor: activeColorVariant,
				},
			},
			outline: {
				border: `1px solid ${enableColorVariant}`,
				color: enableColorVariant,

				'&:hover:not([disabled])': {
					backgroundColor: hoverColorVariant,
				},
				'&:active:not([disabled])': {
					backgroundColor: activeColorVariant,
				},
			},
			ghost: {
				color: enableColorVariant,

				'&:hover:not([disabled])': {
					backgroundColor: hoverColorVariant,
				},
				'&:active:not([disabled])': {
					backgroundColor: activeColorVariant,
				},
			},
		},
	},
});

export const spanStyle = recipe({
	base: {
		display: 'flex',
		alignItems: 'center',
	},
	variants: {
		size: {
			xs: {
				...fontG.text.xs,
				fontWeight: fonts.fontWeight[600],
			},
			sm: {
				...fontG.text.sm,
				fontWeight: fonts.fontWeight[600],
			},
			md: {
				...fontG.text.md,
				fontWeight: fonts.fontWeight[600],
			},
			lg: {
				...fontG.text.lg,
				fontWeight: fonts.fontWeight[600],
			},
		},
	},
});

const spinKeyframes = keyframes({
	'0%': { transform: 'rotate(0deg)' },
	'100%': { transform: 'rotate(360deg)' },
});

export const spinnerStyle = recipe({
	base: {
		position: 'absolute',
		animation: `${spinKeyframes} 0.45s linear infinite`,
		display: 'inline-block',
		borderTop: '2px solid currentcolor',
		borderRight: '2px solid currentcolor',
		borderBottom: '2px solid transparent',
		borderLeft: '2px solid transparent',
		borderRadius: '50%',
	},
	variants: {
		size: {
			xs: {
				width: fonts.fontSize[12],
				height: fonts.fontSize[12],
				left: `calc(50% - ${fonts.fontSize[12]}/2)`,
			},
			sm: {
				width: fonts.fontSize[14],
				height: fonts.fontSize[14],
				left: `calc(50% - ${fonts.fontSize[14]}/2)`,
			},
			md: {
				width: fonts.fontSize[16],
				height: fonts.fontSize[16],
				left: `calc(50% - ${fonts.fontSize[16]}/2)`,
			},
			lg: {
				width: fonts.fontSize[18],
				height: fonts.fontSize[18],
				left: `calc(50% - ${fonts.fontSize[18]}/2)`,
			},
		},
	},
});
