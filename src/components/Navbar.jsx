import React from 'react';
import logo from '../assets/techover-logo.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css';
import { Container } from '@mui/material';

export default function Navbar() {
	return (
		<AppBar position="static">
			<Container>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						The Flag App
					</Typography>
					{/* <Box>
						<img src={logo} alt="Techover" />
					</Box> */}
					<Button color="inherit">Login</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
