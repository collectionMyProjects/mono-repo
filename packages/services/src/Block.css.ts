import { style } from '@vanilla-extract/css';
import { colors } from '../../foundation/src/variables';

export const blockStyle = style({
	width: '100px',
	height: '100px',
	backgroundColor: colors.orange[600],
});
