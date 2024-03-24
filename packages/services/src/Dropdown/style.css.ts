import { createVar, style } from '@vanilla-extract/css';
import { colors } from 'variables';

const resetStyle = style({
	margin: 0,
	padding: 0,
	border: 0,
});

export const dropdownStyle = style([resetStyle]);

export const dropdownItemStyle = style([
	resetStyle,
	{
		width: '100%',
		borderTop: `1px solid ${colors.gray[300]}`,

		// @ts-ignore
		'&:last-of-type': {
			borderBottom: `1px solid ${colors.gray[300]}`,
		},
	},
]);

export const dropdownButtonStyle = style([
	resetStyle,
	{
		width: '100%',
		padding: '0.5rem 0.75rem',
		gap: '0.625rem',
		display: 'flex',
		alignItems: 'center',
	},
]);

export const panelHeight = createVar();
export const dropdownPanelStyle = style([
	resetStyle,
	{
		width: '100%',
		height: panelHeight,
		overflow: 'hidden',
		transition: 'height 0.3s ease',

		// @ts-ignores
		"& > div[data-name='panel-inner']": {
			padding: '0.5rem 0.75rem 1.25rem',
		},
	},
]);
