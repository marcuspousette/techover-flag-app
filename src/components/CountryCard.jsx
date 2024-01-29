import { useContext } from 'react';
import { CardActionArea } from '@mui/material';
import { Grid, Skeleton, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ColorModeContext } from './App';

export default function CountryCard({ i, country }) {
	const { loadingOverride } = useContext(ColorModeContext);
	const navigate = useNavigate();
	return (
		<Grid item xs={12} md={4} lg={3} sm={6} key={i}>
			<Card sx={{ maxWidth: 345 }} onClick={() => navigate(`country/${country.cca2}`)} elevation={6}>
				<CardActionArea>
					{loadingOverride ? (
						<Skeleton variant="rectangular" width={'100%'} height={140} />
					) : (
						<CardMedia component="img" height="140" image={country.flags.png} alt={country.flags.alt} />
					)}

					<CardContent>
						<Typography gutterBottom variant="subtitle1" component="div" noWrap={true}>
							{loadingOverride ? <Skeleton variant="text" /> : <strong>{country.name.common}</strong>}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<strong>Population: </strong>
							{loadingOverride ? (
								<Skeleton
									variant="text"
									width={60}
									sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
								/>
							) : (
								<strong>{country.population}</strong>
							)}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<strong>Region: </strong>
							{loadingOverride ? (
								<Skeleton
									variant="text"
									width={85}
									sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
								/>
							) : (
								<strong>{country.region}</strong>
							)}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<strong>Capital: </strong>
							{loadingOverride ? (
								<Skeleton
									variant="text"
									width={85}
									sx={{ display: 'inline-block', fontSize: '0.875rem', marginLeft: '5px' }}
								/>
							) : (
								<strong>{country.capital}</strong>
							)}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
}
