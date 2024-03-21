import * as React from 'react';
import { clsx } from 'clsx';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
	activeColorVariant,
	buttonStyle,
	enableColorVariant,
	hoverColorVariant,
} from './style.css';
import { ButtonProps } from './types';
import { scale } from 'variables';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			variant = 'solid',
			size = 'md',
			color = 'gray',
			background = 'pink',
			children,
			style,
		} = props;

		const enableColor = scale[background as keyof typeof scale][500];
		const hoverColor =
			variant === 'solid'
				? scale[background as keyof typeof scale][600]
				: scale[background as keyof typeof scale][50];
		const activeColor =
			variant === 'solid'
				? scale[background as keyof typeof scale][700]
				: scale[background as keyof typeof scale][100];

		return (
			<button
				ref={ref}
				className={clsx([
					buttonStyle({
						size,
						variant,
					}),
				])}
				style={{
					...assignInlineVars({
						[enableColorVariant]: enableColor,
						[hoverColorVariant]: hoverColor,
						[activeColorVariant]: activeColor,
					}),
					color: color,
					...style,
				}}
			>
				{children}
			</button>
		);
	},
);

export { Button };
