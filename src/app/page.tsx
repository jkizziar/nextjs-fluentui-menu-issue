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
	RendererProvider,
	SSRProvider,
	createDOMRenderer,
	webLightTheme,
} from '@fluentui/react-components';

export default function Home() {
	const [renderer] = React.useState(() => createDOMRenderer());
	return (
		<RendererProvider renderer={renderer}>
			<FluentProvider theme={webLightTheme}>
				<SSRProvider>
					<TestMenu />
				</SSRProvider>
			</FluentProvider>
		</RendererProvider>
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
