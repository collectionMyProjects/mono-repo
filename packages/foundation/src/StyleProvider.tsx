import React from 'react';
import './globals.css';

type StyleProviderProps = {
	children: React.ReactNode;
};

export const StyleProvider = ({ children }: StyleProviderProps) => {
	return <div>{children}</div>;
};
