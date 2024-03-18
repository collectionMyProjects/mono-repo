import { colors } from 'variables';
import { StyleSprinkles } from './style.css';

type AsProps = {
	as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

export type ColorProps = {
	color?: keyof typeof colors;
	background?: keyof typeof colors;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, 'as'>;

export type AsElementProps = AsProps & ElementProps;

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
