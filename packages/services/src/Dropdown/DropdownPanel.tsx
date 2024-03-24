import { forwardRef, useEffect, useRef, useState } from 'react';
import { DropdownPanelProps } from './types';
import { useAtom } from 'jotai';
import { activeItemsAtom } from './DropdownStore';
import { dropdownPanelStyle, panelHeight } from './style.css';
import clsx from 'clsx';
import { assignInlineVars } from '@vanilla-extract/dynamic';

const DropdownPanel = forwardRef<HTMLDivElement, DropdownPanelProps>(
	(props, ref) => {
		const { itemName = '', children, className, style, ...rest } = props;
		const innerRef = useRef<HTMLDivElement>(null);
		const [activeItems] = useAtom(activeItemsAtom);

		const [isOpen, setIsOpen] = useState(false);

		const currentPanelHeight = isOpen
			? `${innerRef.current?.clientHeight}px`
			: '0';

		useEffect(() => {
			setIsOpen(activeItems.includes(itemName));
		}, [activeItems, itemName]);

		return (
			<div
				{...rest}
				ref={ref}
				className={clsx([dropdownPanelStyle, className])}
				data-action-item={isOpen}
				style={{
					...assignInlineVars({
						[panelHeight]: currentPanelHeight,
					}),
					...style,
				}}
			>
				<div data-name="panel-inner" ref={innerRef}>
					{children}
				</div>
			</div>
		);
	},
);

export { DropdownPanel };
