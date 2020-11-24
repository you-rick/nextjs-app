import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Post = ({ postData: serverData }) => {
	const router = useRouter();
	const [post, setPost] = useState(serverData);

	useEffect(() => {
		const load = async () => {
			const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
			const data = await response.json();
			setPost(data);
		};
		!serverData && load();
	}, []);

	if (!post) {
		return (
			<Layout>
				<h2>loading...</h2>
			</Layout>
		)
	}

	return (
		<Layout title={'Post'}>
			<h1>Post {post.id}</h1>
			<h5>Title - {post.title}</h5>
			<p>Body - {post.body}</p>
		</Layout>
	)
};

Post.getInitialProps = async ({ query, req }) => {
	if (!req) {
		return {
			postData: null
		}
	}
	const response = await fetch(`http://localhost:4200/posts/${query.id}`);
	const postData = await response.json();

	return {
		postData
	}
};

export default Post;
