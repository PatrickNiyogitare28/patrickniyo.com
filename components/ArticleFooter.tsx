import { GetStaticProps } from "next";
import React  from "react";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";

interface IProps {
    currentArticle?: string,
    posts?: PostType[];

}

const ArticleFooter = ({posts}: IProps): JSX.Element => {
    return (
        <div>
            {posts.map(({title, description}: PostType, index: number) => (
                <div className="grid-cols-3">
                    <h3>{title}</h3>
                </div>
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts(['date', 'description', 'slug', 'title', 'tags']);
  
    return {
      props: { posts },
    };
  };

export default ArticleFooter;