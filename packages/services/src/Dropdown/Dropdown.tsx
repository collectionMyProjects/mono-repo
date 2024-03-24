import React from 'react';
import { DropdownProps } from './types';
import clsx from 'clsx';
import { dropdownStyle } from './style.css';

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
	(props, ref) => {
		const { children, className, ...rest } = props;

		return (
			<div {...rest} ref={ref} className={clsx([dropdownStyle, className])}>
				{children}
			</div>
		);
	},
);

export { Dropdown };
