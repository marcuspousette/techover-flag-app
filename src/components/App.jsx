import './App.css';
import { useState, createContext, useMemo } from 'react';
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

export const ColorModeContext = createContext({});

function App() {
	const [mode, setMode] = useState('dark');
	const [themeIndex, setThemeIndex] = useState(0);
	const [loadingOverride, setLoadingOverride] = useState(false);

	const context = useMemo(() => ({
		toggleColorMode: () => {
			setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
		},
		toggleColorTheme: (index) => {
			setThemeIndex(index);
		},
		toggleLoadingOverride: (value) => {
			setLoadingOverride(value);
		},
		loadingOverride
	}));

	const projectTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
	const blueTheme = useMemo(() => createTheme(getBlueTheme(mode)), [mode]);
	const greenTheme = useMemo(() => createTheme(getGreenTheme(mode)), [mode]);
	const crazyTheme = useMemo(() => createTheme(getCraztTheme(mode)), [mode]);
	const themes = [projectTheme, blueTheme, greenTheme, crazyTheme];

	return (
		<ColorModeContext.Provider value={context}>
			<ThemeProvider theme={themes[themeIndex]}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
