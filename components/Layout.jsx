import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title = 'Next App' }) => {
	return (
		<>
			<Head>
				<meta name="keywords" content="Key words, for page, goes here!"/>
				<meta name="description" content="This is first Nextjs application"/>
			</Head>

			<nav>
				<Link href={'/'}><a>Home</a></Link>
				<Link href={'/about'}><a>About</a></Link>
				<Link href={'/posts'}><a>Posts</a></Link>
			</nav>
			<main>
				{children}
			</main>
			<style jsx>{`
			nav {
				background: #fafafa;
				padding: 5px;
				margin-bottom: 25px;
			}
			nav a {
				margin: 0 5px;
			}
			`}</style>
		</>
	)
};


export default Layout;
