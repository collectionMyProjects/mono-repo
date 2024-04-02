'use client';

import React from 'react';
import {
	Dropdown,
	DropdownButton,
	DropdownItem,
	DropdownPanel,
	Text,
} from '@with/services';

const page = () => {
	const items = [
		{
			name: '목록 1',
			content: '내용입니다.',
		},
		{
			name: '목록 2',
			content: '내용입니다.',
		},
	];
	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
			}}
		>
			<Dropdown style={{ width: '100%' }}>
				{items.map((item) => (
					<DropdownItem key={item.name} itemName={item.name}>
						<DropdownButton style={{ backgroundColor: 'skyblue' }}>
							<Text color="gray" fontSize="lg">
								{item.name}
							</Text>
						</DropdownButton>
						<DropdownPanel>
							<Text color="gray" fontSize="md">
								{item.content}
							</Text>
						</DropdownPanel>
					</DropdownItem>
				))}
			</Dropdown>
		</div>
	);
};

export default page;
