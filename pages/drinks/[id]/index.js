import SingleDrink from '../../../components/SingleDrink';

function Drink({ drink }) {
	return (
			<div>
				<SingleDrink key={drink.id} drink={drink}/>
			</div>
	)
}

// This function gets called at build time
export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const apiKey = process.env.API_KEY;
	const res = await fetch(`https://api.airtable.com/v0/appAO4a1ExR0c5Upn/Drinks?maxRecords=100&view=Grid%20view&api_key=${apiKey}`);
	const data = await res.json();
	const drinks = data.records;

	// Get the paths we want to pre-render based on posts
	const paths = drinks.map((drink) => ({
		params: { id: drink.id },
	}))

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1
	const apiKey = process.env.API_KEY;
	const res = await fetch(`https://api.airtable.com/v0/appAO4a1ExR0c5Upn/Drinks/${params.id}?api_key=${apiKey}`);
	const drink = await res.json()

	// Pass post data to the page via props
	return { props: { drink } }
}

export default Drink;