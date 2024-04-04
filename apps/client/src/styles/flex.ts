import { Property } from 'csstype';

type flexGeneratorType = {
	direction?: Property.FlexDirection;
	justify?: Property.JustifyContent;
	align?: Property.AlignItems;
};

const flexGenerator = ({ direction, justify, align }: flexGeneratorType) => ({
	display: 'flex',
	flexDirection: direction,
	justifyContent: justify,
	alignItems: align,
});

const flexG = {
	FLEX: flexGenerator({ align: 'none', justify: 'none' }),
	CENTER: flexGenerator({ align: 'center', justify: 'center' }),
	VERTICAL: flexGenerator({ align: 'center' }),
	HORIZONTAL: flexGenerator({ justify: 'center' }),
	START: flexGenerator({ align: 'center', justify: 'flex-start' }),
	END: flexGenerator({ align: 'center', justify: 'flex-start' }),
	BETWEEN: flexGenerator({ align: 'center', justify: 'space-between' }),

	COLUMN_FLEX: flexGenerator({
		direction: 'column',
		align: 'none',
		justify: 'none',
	}),
	COLUMN_CENTER: flexGenerator({
		direction: 'column',
		align: 'center',
		justify: 'center',
	}),
	COLUMN_VERTICAL: flexGenerator({ direction: 'column', align: 'center' }),
	COLUMN_HORIZONTAL: flexGenerator({ direction: 'column', justify: 'center' }),
	COLUMN_START: flexGenerator({
		direction: 'column',
		align: 'center',
		justify: 'flex-start',
	}),
	COLUMN_END: flexGenerator({
		direction: 'column',
		align: 'center',
		justify: 'flex-end',
	}),
	COLUMN_BETWEEN: flexGenerator({
		direction: 'column',
		align: 'center',
		justify: 'space-between',
	}),
};

export default flexG;
