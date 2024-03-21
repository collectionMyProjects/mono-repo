import * as React from 'react';
import { AsElementProps, StyleProps } from '../core/types';
import { extractSprinkleProps } from '../utils/properties';
import { BaseStyle, StyleSprinkles } from '../core/style.css';
import { clsx } from 'clsx';

export type BoxProps = AsElementProps & StyleProps;

const Box = React.forwardRef<HTMLElement, BoxProps>((props, ref) => {
	const { as = 'div', color, background, children } = props;

	return React.createElement(
		as,
		{
			...props,
			ref,
			className: clsx([
				BaseStyle,
				StyleSprinkles(
					extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
				),
				props.className,
			]),
			style: {
				color: color,
				backgroundColor: background,
				...props.style,
			},
		},
		children,
	);
});

export { Box };
