import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import localFont from 'next/font/local';
import '@with/foundation/themes.css';
import '@with/foundation/globalStyle.css';
import '@with/services/style.css';

export const metadata: Metadata = {
	title: 'BSMGG',
	description: '부산소프트웨어 마이스터',
	icons: {
		icon: '/BSMGG.svg',
	},
};

const Pretendard = localFont({
	src: '../../public/fonts/PretendardVariable.woff2',
});

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body className={Pretendard.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
