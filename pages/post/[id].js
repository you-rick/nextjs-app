import { useRouter } from "next/router";

const Post = () => {
	const router = useRouter();
	console.log(router);

	return <h1>Post {router.query.id}</h1>
};


export default Post;
