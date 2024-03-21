import * as React from 'react';
import { TextProps } from './types';
import { BaseStyle, StyleSprinkles } from '../core/style.css';
import { clsx } from 'clsx';
import { extractSprinkleProps } from '../utils/properties';
import { textStyle } from './style.css';

const Text = React.forwardRef<HTMLElement, TextProps>((props, ref) => {
	const { as = 'p', color = 'gray', background, children, fontSize } = props;

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
				textStyle({
					fontSize,
				}),
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
export { Text };
