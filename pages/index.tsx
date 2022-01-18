import React from 'react';
import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  const tags: Array<string> = [
    'Flutter', 'Typescript', 'Nodejs', 'React', 'Nestjs', 'Springboot', 'Git', 'CLIs', 'Azure'
  ]
  return (
    <Layout>
      <h1>Code Ark</h1>
      <p >Blogging Garden for <code>Programming tips</code>,<code>Tutorials</code>, <code>Trending tools</code> & <code>Practices</code></p>

      <h1>Tags 🏷️</h1>
      <div className="mt-2 tags-wrapper">
        {tags.map((tag: string, index: number) => (
          <code
            className='ml-2 text-xs border p-2 rounded'
            key={index.toString()}>{tag}</code>
        ))}
      </div>

      <h1 className="mt-10">Articles</h1>
      {posts.map((post) => (
        <article key={post.slug} className="mt-5 p-5 border rounded-lg">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <div className='mt-5 mb-5 post-tags-wrapper'>
            {post.tags.map((tag: string, index: number) => (
              <code
                key={index.toString()}
                className="text-sm ml-2 font-light border py-1 px-5 rounded-2xl cursor-pointer"
                style={{ color: 'grey' }}
              >#{tag.toLowerCase()}</code>
            ))}
          </div>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title', 'tags']);

  return {
    props: { posts },
  };
};

export default Index;
