import { colors } from 'variables';
import '@with/services/style.css';
import { Flex } from '@with/services';

export default {
	title: 'Flex',
	component: Flex,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export const BoxStory = {
	args: {
		as: 'div',
		padding: '5',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.blue[100],
		style: {
			width: '100px',
			height: '100px',
		},
	},
};
