import { motion, useScroll } from 'framer-motion';
import { IconSearchFill } from '@seed-design/icon';
import { Flex, Text } from '@with/services';
import * as styles from './style.css';

const Header = () => {
	const { scrollYProgress } = useScroll();

	return (
		<header className={styles.container}>
			<div className={styles.contentsWrapper}>
				<img src="https://static.standby.kr/static/blog/images/logo.svg" />
				<Flex align="center" gap={5}>
					<IconSearchFill style={{ width: '18px' }} />
					<Text fontSize="lg">검색</Text>
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
