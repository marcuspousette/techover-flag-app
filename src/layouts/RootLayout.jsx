import { Outlet, NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import { Container, Box } from '@mui/material';
import Toolbar from '../components/Toolbar';

export default function RootLayout() {
	const theme = useTheme();
	return (
		<Box className="root-layout" sx={{ bgcolor: theme.palette.background.default }}>
			<Navbar />
			<main>
				<Container>
					<Outlet />
					<Toolbar />
				</Container>
			</main>
		</Box>
	);
}
