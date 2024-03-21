import { recipe } from '@vanilla-extract/recipes';
import { createVar, keyframes } from '@vanilla-extract/css';
import { box, fonts, scale } from 'variables';
import { fontG } from 'classes';

export const enableColorVariant = createVar(); // 500
export const hoverColorVariant = createVar(); // 600 outline 50 ghost 50
export const activeColorVariant = createVar(); // 700 outline 100 ghost 100

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
