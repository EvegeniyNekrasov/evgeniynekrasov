import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { router } from './routes';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</ThemeProvider>
);
