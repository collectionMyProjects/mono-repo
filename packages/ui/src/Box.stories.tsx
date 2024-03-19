import { Box } from '@with/services';
import '@with/services/style.css';

export default {
	title: 'Box',
	component: Box,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export const BoxStory = {
	args: {
		as: 'div',
		padding: '5',
		background: 'pink',
		boxShadow: 'xl',
		borderRadius: 'md',
	},
};
