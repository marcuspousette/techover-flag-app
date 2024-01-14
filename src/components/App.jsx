import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// pages
import Home, { allCountrysLoader } from '../pages/Home';
import CountryDetails, { countryDetailsLoader } from '../pages/CountryDetails';

// layouts
import RootLayout from '../layouts/RootLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} loader={allCountrysLoader} />
			<Route path="country/:code" element={<CountryDetails />} loader={countryDetailsLoader} />
			{/* <Route path="*" element={<NotFound />} /> */}
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
