import * as React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Layout = () => {
	return (
		<div>
			<Navbar />
			<main>
				<React.Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</React.Suspense>
			</main>
			<div>footer</div>
		</div>
	);
};

export default Layout;
