import * as React from 'react';
import { AsElementProps, StyleProps } from '../core/types';
import { extractSprinkleProps } from '../utils/properties';
import { BaseStyle, StyleSprinkles } from '../core/style.css';
import { clsx } from 'clsx';
import { colors } from 'variables';

export type BoxProps = AsElementProps & StyleProps;

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
	console.log(colors.red[100]);
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
				background: background,
				...props.style,
			},
		},
		children,
	);
};

const _Box = React.forwardRef(Box);
export { _Box as Box };
