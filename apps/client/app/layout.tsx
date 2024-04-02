import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import '@with/foundation/themes.css';
import '@with/foundation/globalStyle.css';
import '@with/services/style.css';

export const metadata: Metadata = {
	title: '스탠바이랩',
	description: '취업하는 이상진',
	icons: {
		icon: '/standbylab.png',
	},
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
