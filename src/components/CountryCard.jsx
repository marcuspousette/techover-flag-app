import { useContext } from 'react';
import { CardActionArea } from '@mui/material';
import { Grid, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CountryCard({ i, country }) {
	const navigate = useNavigate();

	return (
		<Grid item xs={12} md={4} lg={3} sm={6} key={i}>
			<Card sx={{ maxWidth: 345 }} onClick={() => navigate(`country/${country.cca2}`)} elevation={6}>
				<CardActionArea>
					<CardMedia component="img" height="140" image={country.flags.png} alt={country.flags.alt} />

					<CardContent>
						<Typography gutterBottom variant="subtitle1" component="div" noWrap={true}>
							<strong>{country.name.common}</strong>
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<strong>Population: </strong>
							{country.population}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<strong>Region: </strong>
							{country.region}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<strong>Capital: </strong>
							{country.capital}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
}
