import { useLoaderData, useSearchParams } from 'react-router-dom';
import Search from '../components/Search';
import Filter from '../components/Filter';
import { Box, Grid } from '@mui/material';
import CountryCard from '../components/CountryCard';
import { sortAlphabetically } from '../utils/functions';

export default function Home() {
	const [searchParams, setSearchParams] = useSearchParams();
	const dataArray = useLoaderData();
	const sorted = dataArray.sort(sortAlphabetically);

	return (
		<Box className="Home" pt={4}>
			<Grid container mb={4} justifyContent="space-between" spacing={2}>
				<Grid item md={4} xs={12}>
					<Search setSearchParams={setSearchParams} />
				</Grid>
				<Grid item md={2} xs={6}>
					<Filter setSearchParams={setSearchParams} />
				</Grid>
			</Grid>
			<Grid
				container
				spacing={4}
				rowGap={4}
				flexDirection={{ xs: 'column', md: 'row' }}
				alignContent={{ xs: 'center', md: 'start' }}
			>
				{sorted.map((country, i) => (
					<CountryCard country={country} key={i} />
				))}
			</Grid>
		</Box>
	);
}

async function getAllCountrys() {
	return await fetch(`https://restcountries.com/v3.1/all`);
}

async function getCountrysByFilters(searchTerm, region) {
	if (region) {
		return await fetch(`https://restcountries.com/v3.1/region/${region}`);
	} else if (searchTerm) {
		return await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
	} else {
		throw Error('Kunde inte hitta den profilen.');
	}
}

// data loader
export const allCountrysLoader = async ({ request }) => {
	const url = new URL(request.url);
	const { searchParams } = url;
	const searchTerm = searchParams.get('search');
	const region = searchParams.get('region');
	const res = searchParams.size > 0 ? await getCountrysByFilters(searchTerm, region) : await getAllCountrys();

	if (!res.ok) {
		throw Error('Could not find that country');
	}
	return res.json();
};
