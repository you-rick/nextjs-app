import {useState, useEffect} from 'react';
import Layout from "../components/Layout";
import Link from "next/link";
import {PostInterface} from "../core/interfaces";
import {NextPageContext} from "next";

interface PostsProps {
    posts: PostInterface[]
}

const Posts = ({posts: serverPosts}: PostsProps) => {

    const serverURL = `${process.env.API_URL}/posts`;
    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        const load = async () => {
            const response = await fetch(serverURL);
            const postsList = await response.json();
            setPosts(postsList);
            ;
        };
        !serverPosts && load();
    }, []);

    if (!posts) {
        console.log("sdfsdfsdf");
        return (
            <Layout>
                <h2>loading...</h2>
            </Layout>
        )
    }


    return (
        <Layout title={'Posts'}>
            <h1>Posts page</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>

                        <Link href={{pathname: `/post/[id]`, query: {id: post.id},}}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
};

//Next.js входные данные перед рэндэрингом на странице
Posts.getInitialProps = async ({req}: NextPageContext) => {
    if (!req) {
        return {
            postData: null
        }
    }

    const serverURL = `${process.env.API_URL}/posts`;
    // fetch внизу - это другой fetch, не клиентский, поставляется с next.js
    const response = await fetch(serverURL);
    const postsList: PostInterface[] = await response.json();

    return {
        posts: postsList
    }
};

export default Posts;
