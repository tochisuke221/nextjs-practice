import prism from 'prismjs';
import { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from "next";
import { Post, getPostContents,getPosts } from '..'
import { NextPage } from 'next';
import { PostComponent } from '../../../lib/component/Post';
import { Layout } from '../../../lib/component/Layout';

type StaticProps = {
    post?: Post;
}


type StaticPathsPrams = {
    slug: string;
}

export const getStaticProps: GetStaticProps<
    StaticProps,
    StaticPathsPrams
> = async({
    params,
    preview
}) => {
    const notFoundProps = {
        props: {},
        redirect: {
            destination: '/404'
        }
    };

    if(!params) {
        return notFoundProps;
    }

    const { slug } = params;
    const posts = await getPosts(slug);
    const post = posts.shift();
    if(!post) {
        return notFoundProps;
    }
    const contents = await getPostContents(post);
    post.contents = contents;
    
    return {
        props: {
            post
        }
    }
}


export const getStaticPaths: GetStaticPaths<
    StaticPathsPrams
> = async () => {
    const posts = await getPosts();
    const paths: {
        params: { slug: string };
    }[] = [];

    posts.forEach((post, i) => {
        const slug = post.slug;
        if(slug) {
            paths.push({
                params: {
                    slug
                }
            })
        }
    });

    console.dir(paths)

 
    return {
        paths,
        fallback: 'blocking'
    }
}

const PostPage: NextPage<StaticProps> = ({ post }) => {
    useEffect(()=>{
        prism.highlightAll();
    }, [])

    if(!post) return null;

    return (
        <Layout>
            <PostComponent post={post}></PostComponent>
        </Layout>
    )
}

export default PostPage;
