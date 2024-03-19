import { CSSProperties } from '@vanilla-extract/css';
import { AsElementProps, StyleProps } from '../core/types';
import { fontG } from 'classes';

export type TextProps = AsElementProps &
	StyleProps & {
		fontSize: keyof typeof fontG.text;
	};
