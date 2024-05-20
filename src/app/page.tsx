'use client';

import React from 'react';

import {
	Button,
	FluentProvider,
	Menu,
	MenuItem,
	MenuList,
	MenuPopover,
	MenuTrigger,
	webLightTheme,
} from '@fluentui/react-components';

export default function Home() {
	return (
		<FluentProvider theme={webLightTheme}>
			<TestMenu />
		</FluentProvider>
	);
}
function TestMenu() {
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
