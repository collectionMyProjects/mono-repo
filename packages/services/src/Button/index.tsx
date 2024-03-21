import * as React from 'react';
import { clsx } from 'clsx';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
	activeColorVariant,
	buttonStyle,
	enableColorVariant,
	hoverColorVariant,
	spanStyle,
	spinnerStyle,
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
			leftIcon,
			rightIcon,
			isLoading,
			isDisabled = false,
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

		const disabled = isLoading || isDisabled;

		return (
			<button
				ref={ref}
				role="button"
				className={clsx([
					buttonStyle({
						size,
						variant,
					}),
				])}
				data-loading={isLoading}
				disabled={disabled}
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
				{isLoading && <div className={spinnerStyle({ size })} />}
				{leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
				<span>{children}</span>
				{rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
			</button>
		);
	},
);

export { Button };
