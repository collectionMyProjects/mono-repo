import { colors, box } from 'variables';
import { style } from '@vanilla-extract/css';

export const container = style({
	width: '100%',
	height: '60px',
	backgroundColor: `${colors.white}`,
	boxShadow: `${box.shadows.base}`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'fixed',
});

export const contentsWrapper = style({
	minWidth: '85%',
	height: '60px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
});

export const progressBar = style({
	position: 'fixed',
	marginTop: '60px',
	top: 0,
	left: 0,
	right: 0,
	height: '2px',
	backgroundColor: `${colors.blue[400]}`,
	transformOrigin: '0%',
});

export const logo = style({
	width: '110px',
	cursor: 'pointer',
});
