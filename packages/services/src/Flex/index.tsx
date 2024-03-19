import * as React from 'react';
import { extractSprinkleProps } from '../utils/properties';
import { BaseStyle, StyleSprinkles } from '../core/style.css';
import { clsx } from 'clsx';
import { FlexProps } from './types';

const Flex = (props: FlexProps, ref: React.Ref<HTMLElement>) => {
	const {
		as = 'div',
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
				flexBasis: basis,
				flexDirection: direction,
				flexGrow: grow,
				flexShrink: shrink,
				flexWrap: wrap,
				gap,
				...props.style,
			},
		},
		children,
	);
};

const _Flex = React.forwardRef(Flex);
export { _Flex as Flex };
