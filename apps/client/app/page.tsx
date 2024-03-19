import React from 'react';
import '@with/foundation/themes.css';
import '@with/foundation/globalStyle.css';
import { Box, Flex } from '@with/services';

const page = () => {
	return (
		<>
			<Flex
				color="pink"
				style={{
					width: '100%',
					height: '100vh',
				}}
				align="center"
				justify="center"
			>
				이상진
			</Flex>
			<Box color="blue">sdf</Box>
		</>
	);
};

export default page;
