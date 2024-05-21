'use client';

import React from 'react';

import { Button, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger } from '@fluentui/react-components';

export default function Home() {
	return (
		<Menu>
			<MenuTrigger>
				<Button>Toggle menu</Button>
			</MenuTrigger>

			<MenuPopover>
				<MenuList>
					<MenuItem>New </MenuItem>
					<MenuItem>New Window</MenuItem>
					<MenuItem disabled>Open File</MenuItem>
					<MenuItem>Open Folder</MenuItem>
				</MenuList>
			</MenuPopover>
		</Menu>
	);
}
