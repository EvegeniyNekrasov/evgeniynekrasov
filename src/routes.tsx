import * as React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import Layout from './pages/Layout/Layout.tsx';
import Error from './pages/Error/Error.tsx';

const Home = React.lazy(() => import('./pages/Home/Home.tsx'));
const Works = React.lazy(() => import('./pages/Works/Works.tsx'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/works',
				element: <Works />
			}
		]
	}
]);
