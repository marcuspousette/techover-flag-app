import React from 'react';
import { useTheme } from '@mui/material/styles';
import './Navbar.css';
import { ColorModeContext } from './App';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Button, Box, Container, Typography, Toolbar, AppBar } from '@mui/material';
import techoverLogoDark from '../assets/techover-logo-dark.png';
import techoverLogo from '../assets/techover-logo.png';
import { unStyleContainer } from '../utils/unstyle';

export default function Navbar() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);

	return (
		<AppBar
			position="static"
			sx={{
				bgcolor: theme.palette.background.paper
			}}
		>
			<Container style={colorMode.noContainer ? unStyleContainer : {}}>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Typography variant="h6" component="div" color={'primary'}>
						The Flag App
					</Typography>
					<Box sx={{ display: { xs: 'none', md: 'block' } }}>
						{theme.palette.mode === 'dark' ? (
							<img src={techoverLogo} alt="Techover" />
						) : (
							<img src={techoverLogoDark} alt="Techover" />
						)}
					</Box>

					<Button
						color="primary"
						variant="text"
						onClick={colorMode.toggleColorMode}
						startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
					>
						{theme.palette.mode} mode
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
