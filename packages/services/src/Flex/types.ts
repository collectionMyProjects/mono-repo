import type * as CSS from 'csstype';
import { AsElementProps, StyleProps } from '../core/types';

export type FlexProps = {
	align?: CSS.Properties['alignItems'];
	basis?: CSS.Properties['flexBasis'];
	direction?: CSS.Properties['flexDirection'];
	grow?: CSS.Properties['flexGrow'];
	justify?: CSS.Properties['justifyContent'];
	shrink?: CSS.Properties['flexShrink'];
	wrap?: CSS.Properties['flexWrap'];
	gap?: number;
} & AsElementProps &
	StyleProps;
