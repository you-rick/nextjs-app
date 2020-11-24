import Layout from "../../../../components/Layout";
import { useRouter } from "next/router";

const Articles = () => {
	const router = useRouter();
	console.log(router);

	return (
		<Layout title={'Articles'}>
			<h1>Articles page of user - {router.query.id}</h1>
		</Layout>
	)
};


export default Articles;
