import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CountryCard({ i, country }) {
	const navigate = useNavigate();
	return (
		<Grid item xs={12} md={3} key={i}>
			<Card sx={{ maxWidth: 345 }} onClick={() => navigate(`country/${country.cca2}`)}>
				<CardActionArea>
					<CardMedia component="img" height="140" image={country.flags.png} alt={country.flags.alt} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{country.name.common}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<strong>Population:</strong> {country.population}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<strong>Region:</strong> {country.region}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<strong>Capital:</strong> {country.capital}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
}
