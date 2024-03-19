import { recipe } from '@vanilla-extract/recipes';
import { fontG } from 'classes';

export const textStyle = recipe({
	variants: {
		fontSize: {
			...fontG.text,
		},
		defaultVariants: {
			fontSize: 'xl',
		},
	},
});
