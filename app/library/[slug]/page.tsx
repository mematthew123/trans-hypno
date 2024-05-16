import { SanityDocument } from '@sanity/client';
import Post from '@/components/Post';
import { postPathsQuery, postQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { client } from '@/sanity/lib/client';
import { revalidateTag } from 'next/cache';
import { Metadata } from 'next';

export const revalidate = 1;

export async function generateMetadata({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  revalidateTag(post && post._updatedAt);

  return {
    title: post.title,
    description: post.description,
    image: post.mainImage,
    type: 'article',
    date: post._updatedAt,
  } as Metadata;
}

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);
  console.log(posts)

  revalidateTag(posts);
  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  revalidateTag(post && post._updatedAt);

  return <Post post={post} />;
}
