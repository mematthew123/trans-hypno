// ./nextjs-app/sanity/lib/queries.ts

import { SanityClient, groq } from 'next-sanity';
import { PortableTextBlock, ImageAsset } from 'sanity';

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, mainImage, publishedAt, excerpt,
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const faqsQuery = groq`*[_type == "faqs"]{
    _id,
    question,
    answer
}`;

export type Benefit = {
  title: string;
  description: PortableTextBlock[];
  benefitsImage: ImageAsset;
  _id: string;
  _rev: string;
};

export async function getBenefits(client: SanityClient) {
  const benefitsQuery = groq`*[_type == 'benefits']{
    _id,

    title,
    description,
    benefitsImage {
        asset->,
        _rev,
        
        },
        
  }`;
  return await client.fetch<Benefit[]>(benefitsQuery);
}
