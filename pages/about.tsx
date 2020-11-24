import Router from "next/router";
import Layout from "../components/Layout";

const About = () => {
	return (
		<Layout title={'About'}>
			<h1>About Us</h1>
			<button onClick={() => Router.push('/')}>Go back home</button>
		</Layout>
	)
};


export default About;

