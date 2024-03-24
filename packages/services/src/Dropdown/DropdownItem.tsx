import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import { DropdownItemProps } from './types';
import clsx from 'clsx';
import { dropdownItemStyle } from './style.css';

const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
	(props, ref) => {
		const { itemName, children, className, ...rest } = props;

		const childrenWithProps = Children.toArray(children);

		const dropdownItemChildren = childrenWithProps.map((child) => {
			if (isValidElement(child)) {
				return cloneElement(child, { ...child.props, itemName });
			}

			return null;
		});

		return (
			<div {...rest} ref={ref} className={clsx([dropdownItemStyle, className])}>
				{dropdownItemChildren}
			</div>
		);
	},
);

export { DropdownItem };
