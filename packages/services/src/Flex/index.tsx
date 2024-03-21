import * as React from 'react';
import { FlexProps } from './types';
import { clsx } from 'clsx';
import { BaseStyle, StyleSprinkles } from '../core/style.css';
import { extractSprinkleProps } from '../utils/properties';

const Flex = React.forwardRef<HTMLElement, FlexProps>((props, ref) => {
	const {
		as = 'div',
		color,
		background,
		align,
		basis,
		direction,
		grow,
		justify,
		shrink,
		wrap,
		gap,
		children,
	} = props;

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
				display: 'flex',
				alignItems: align,
				justifyContent: justify,
				flexDirection: direction,
				flexWrap: wrap,
				flexGrow: grow,
				flexShrink: shrink,
				flexBasis: basis,
				gap,
				color: color,
				backgroundColor: background,
				...props.style,
			},
		},
		children,
	);
});

export { Flex };
