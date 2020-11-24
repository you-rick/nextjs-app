import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import {PostInterface, PostNextPageContent} from "../../core/interfaces";
import {NextPage} from "next";

interface PostData {
    post: PostInterface
}

const Post:NextPage<PostData> = ({post: serverData}: PostData) => {
    const router = useRouter();
    const [post, setPost] = useState(serverData);

    useEffect(() => {
        const load = async () => {
            const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
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

Post.getInitialProps = async ({query, req}: PostNextPageContent) => {
    if (!req) {
        return {
            post: null
        }
    }
    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
    const post: PostInterface = await response.json();

    return {
        post
    }
};

export default Post;
