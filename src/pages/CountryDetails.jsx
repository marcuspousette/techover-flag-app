import { useLoaderData, useParams, Link } from 'react-router-dom';

export default function CountryDetails() {
	const [country] = useLoaderData();
	console.log(country);
	return <div className="CountryDetails">CountryDetails</div>;
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
