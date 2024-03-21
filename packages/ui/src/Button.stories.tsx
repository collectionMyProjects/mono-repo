import { Button } from '@with/services';
import '@with/services/style.css';
import { colors } from 'variables';

export default {
	title: 'Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			options: ['xs', 'sm', 'md', 'lg'],
			control: 'select',
		},
		color: {
			options: Object.keys(colors),
			control: 'select',
		},
		variant: {
			options: ['solid', 'outline', 'ghost'],
			control: 'select',
		},
	},
};

export const ButtonStory = {
	args: {
		size: 'lg',
		children: 'Button',
		variant: 'solid',
		color: 'black',
		background: 'blue',
	},
};
