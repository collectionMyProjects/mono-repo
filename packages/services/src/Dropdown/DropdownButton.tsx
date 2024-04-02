import { forwardRef, useCallback, useState } from 'react';
import { DropdownButtonProps } from './types';
import { useSetAtom } from 'jotai';
import { activeItemsAtom } from './DropdownStore';
import { IconAddRegular, IconSubtractionRegular } from '@seed-design/icon';
import clsx from 'clsx';
import { dropdownButtonInterval, dropdownButtonStyle } from './style.css';

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
	(props, ref) => {
		const { className, itemName = '', children, ...rest } = props;
		const setActiveItems = useSetAtom(activeItemsAtom);
		const [activeIcon, setActiveIcon] = useState(false);

		const handleClick = useCallback(() => {
			setActiveItems((prevItems) =>
				prevItems.includes(itemName)
					? prevItems.filter((item) => item !== itemName)
					: [...prevItems, itemName],
			);
			setActiveIcon((prev) => !prev);
		}, [itemName, setActiveItems]);

		return (
			<button
				ref={ref}
				onClick={handleClick}
				className={clsx([dropdownButtonStyle, className])}
				style={{ cursor: 'pointer' }}
				{...rest}
			>
				<div className={dropdownButtonInterval}>
					{children}
					{activeIcon ? (
						<IconSubtractionRegular style={{ width: '18px', height: '18px' }} />
					) : (
						<IconAddRegular style={{ width: '18px', height: '18px' }} />
					)}
				</div>
			</button>
		);
	},
);

export { DropdownButton };
