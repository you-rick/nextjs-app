import NextNProgress from "nextjs-progressbar";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps}/>
			<NextNProgress
				color="#29D"
				startPosition={0.3}
				stopDelayMs={200}
				height="3"
			/>
		</>
	)
};


export default MyApp;
