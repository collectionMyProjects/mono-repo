import { motion, useScroll } from 'framer-motion';
import { Flex, Text } from '@with/services';
import * as styles from './style.css';

const Header = () => {
	const { scrollYProgress } = useScroll();

	return (
		<header className={styles.container}>
			<div className={styles.contentsWrapper}>
				<img src="/assets/bsmgg.png" className={styles.logo} alt="logo" />
				<Flex align="center">
					<Text fontSize="lg" style={{ cursor: 'pointer' }}>
						로그인
					</Text>
				</Flex>
			</div>
			<motion.div
				className={styles.progressBar}
				style={{ scaleX: scrollYProgress }}
			/>
		</header>
	);
};

export default Header;
