import { Text } from '@with/services';
import { fontG } from 'classes';
import { colors } from 'variables';
import '@with/services/style.css';

export default {
	title: 'Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		as: {
			options: ['h1', 'h2', 'h3', 'h4', 'h5'],
			control: 'select',
		},
		fontSize: {
			options: Object.keys(fontG.text),
			control: 'select',
		},
		color: {
			options: Object.keys(colors),
		},
	},
};

export const BoxStory = {
	args: {
		color: colors.pink[500],
		textAlign: 'center',
		children: '마술 하나 보여줄까!',
	},
};
