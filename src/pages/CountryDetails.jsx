import { useLoaderData, useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function CountryDetails() {
	const navigate = useNavigate();
	const [country] = useLoaderData();
	console.log(country);
	return (
		<Box className="CountryDetails">
			<Grid container>
				<Grid item xs={4}>
					<Stack direction="row" spacing={2}>
						<Button onClick={() => navigate('/')} startIcon={<ArrowBackIcon />}>
							Back
						</Button>
					</Stack>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item md={6} xs={12}>
					<img src={country.flags.svg} alt={country.flags.alt} width="100%" />
				</Grid>
				<Grid md={6} xs={12}>
					{country.name.common}
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
		throw Error('Kunde inte hitta den profilen.');
	}
	return res.json();
};
