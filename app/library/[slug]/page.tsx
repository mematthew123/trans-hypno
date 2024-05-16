import { SanityDocument } from '@sanity/client';
import Post from '@/components/Post';
import { postPathsQuery, postQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { client } from '@/sanity/lib/client';
import { Metadata, ResolvingMetadata } from 'next';
import { toPlainText } from '@portabletext/react';

export const revalidate = 1;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  const title = post?.title;
  const description = post?.description || toPlainText(post?.body);

  return {
    title,
    description,
  };
}
// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });

  return <Post post={post} />;
}
