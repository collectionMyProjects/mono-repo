import { forwardRef, useCallback } from 'react';
import { DropdownButtonProps } from './types';
import { useSetAtom } from 'jotai';
import { activeItemsAtom } from './DropdownStore';
import clsx from 'clsx';
import { dropdownButtonStyle } from './style.css';

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
	(props, ref) => {
		const { className, itemName = '', children, ...rest } = props;
		const setActiveItems = useSetAtom(activeItemsAtom);

		const handleClick = useCallback(() => {
			setActiveItems((prevItems) =>
				prevItems.includes(itemName)
					? prevItems.filter((item) => item !== itemName)
					: [...prevItems, itemName],
			);
		}, [itemName, setActiveItems]);

		return (
			<button
				ref={ref}
				onClick={handleClick}
				className={clsx([dropdownButtonStyle, className])}
				style={{ cursor: 'pointer' }}
				{...rest}
			>
				{children}
			</button>
		);
	},
);

export { DropdownButton };
