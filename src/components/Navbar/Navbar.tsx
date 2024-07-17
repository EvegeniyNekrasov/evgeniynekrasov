import { Link } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { Navbar as NavbarType } from '../../types/Navbar';

import './Navbar.css';

const Navbar = () => {
	return (
		<nav>
			<ul>
				{navbar.map((item: NavbarType) => (
					<li key={item.id}>
						<Link to={item.url}>{item.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
