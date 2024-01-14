import { useLoaderData, useParams, Link, useSearchParams } from 'react-router-dom';
import Search from '../components/Search';
import Filter from '../components/Filter';
import { Box, Grid } from '@mui/material';

export default function Home() {
	const [searchParams, setSearchParams] = useSearchParams();
	const dataArray = useLoaderData();
	console.log({ dataArray, searchParams });
	return (
		<div className="Home">
			<Grid container>
				<Grid item md={6}>
					<Search setSearchParams={setSearchParams} />
				</Grid>
				<Grid item md={6}>
					<Filter setSearchParams={setSearchParams} />
				</Grid>
			</Grid>
			<Grid container>
				{dataArray.map((country) => (
					<Grid item xs={12} md={3}>
						<Box>{country.name.common}</Box>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

async function getAllCountrys() {
	return await fetch(`https://restcountries.com/v3.1/all`);
}

async function getCountrysByFilters(searchTerm, region) {
	if (region) {
		return await fetch(`https://restcountries.com/v3.1/region/${region}`);
	} else if (searchTerm) {
		return await fetch(`https://restcountries.com/v3.1/all`);
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
		throw Error('Kunde inte hitta den profilen.');
	}
	return res.json();
};

//https://restcountries.com/v3.1/region/{region}
