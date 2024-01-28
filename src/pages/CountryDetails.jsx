import { useLoaderData, useNavigate } from 'react-router-dom';
import { Box, Grid, Stack, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CountryChips from '../components/CountryChips';

export default function CountryDetails() {
	const navigate = useNavigate();
	const [country] = useLoaderData();

	return (
		<Box className="CountryDetails">
			<Grid container mt={4}>
				<Grid item xs={4}>
					<Button onClick={() => navigate('/')} startIcon={<ArrowBackIcon />}>
						Back
					</Button>
				</Grid>
			</Grid>
			<Grid container columnSpacing={8} mt={4}>
				<Grid item md={6} xs={12}>
					<img
						src={country.flags.svg}
						alt={country.flags.alt}
						width="100%"
						style={{ borderRadius: '10px' }}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<Stack justifyContent="center" alignItems="start">
						<Typography gutterBottom variant="h3" component="div" color={'primary'}>
							{country.name.common}
						</Typography>
						<Grid container sapce={2} mb={8}>
							<Grid item md={6} xs={12}>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Population:</strong> {country.population}
								</Typography>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Region:</strong> {country.region}
								</Typography>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Capital:</strong> {country.capital}
								</Typography>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Native name:</strong>{' '}
									{country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}
								</Typography>
							</Grid>
							<Grid item md={6} xs={12}>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Top Level Domain:</strong> {country.tld}
								</Typography>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Currencies:</strong>{' '}
									{country.currencies[Object.keys(country.currencies)[0]].name}
								</Typography>
								<Typography gutterBottom variant="body1" component="div" color={'primary'}>
									<strong>Language:</strong> {country.languages[Object.keys(country.languages)[0]]}
								</Typography>
							</Grid>
						</Grid>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Typography gutterBottom variant="body1" component="div" color={'primary'}>
								<strong>Border Countries:</strong>
							</Typography>
							<CountryChips borders={country.borders} />
						</Stack>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
}

// data loader
export const countryDetailsLoader = async ({ params }) => {
	const { code } = params;
	const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
	if (!res.ok) {
		throw Error('Could not find that country');
	}
	return res.json();
};
