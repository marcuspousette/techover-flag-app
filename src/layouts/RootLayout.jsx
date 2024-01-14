import { Outlet, NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';

export default function RootLayout() {
	return (
		<div className="root-layout">
			<header>
				<Navbar />
			</header>
			<main>
				<Container>
					<Outlet />
				</Container>
			</main>
		</div>
	);
}
