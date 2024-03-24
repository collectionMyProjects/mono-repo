import React from 'react';

export type DropdownProps = {
	children: React.ReactNode | React.ReactNode[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type DropdownItemProps = {
	children: React.ReactNode[];
	itemName: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type DropdownButtonProps = {
	itemName?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type DropdownPanelProps = {
	itemName?: string;
} & React.HTMLAttributes<HTMLDivElement>;
