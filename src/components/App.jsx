import './App.css';
import * as React from 'react';
import { getDesignTokens } from '../utils/theme';
import { getBlueTheme } from '../utils/blue';
import { getGreenTheme } from '../utils/green';
import { getCraztTheme } from '../utils/crazy';

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home, { allCountrysLoader } from '../pages/Home';
import CountryDetails, { countryDetailsLoader } from '../pages/CountryDetails';
import NotFound from '../pages/NotFound';
import RootLayout from '../layouts/RootLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} errorElement={<NotFound />} loader={allCountrysLoader} />
			<Route
				path="country/:code"
				element={<CountryDetails />}
				errorElement={<NotFound />}
				loader={countryDetailsLoader}
			/>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
	const [mode, setMode] = React.useState('light');
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			}
		}),
		[]
	);

	const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
	const blueTheme = React.useMemo(() => createTheme(getBlueTheme(mode)), [mode]);
	const greenTheme = React.useMemo(() => createTheme(getGreenTheme(mode)), [mode]);
	const crazyTheme = React.useMemo(() => createTheme(getCraztTheme(mode)), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={blueTheme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
