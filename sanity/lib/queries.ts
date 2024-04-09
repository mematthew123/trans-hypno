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

export type PageContent = {
  introTitle: string;
  mainContent: PortableTextBlock[];
  testimonial: string;
  _id: string;
  _rev: string;
};

export const pageContentQuery = groq`*[_type == "hypnotherapyContent"]{

    _id,
    _rev,
    introTitle,
    mainContent,
    testimonial

}`;

export type Benefit = {
  title: string;
  description: PortableTextBlock[];
  benefitsImage: ImageAsset;
  _id: string;
  _rev: string;
};

export const benefitsQuery = groq`*[_type == "benefits"]{
    title,
    description,
    benefitsImage
}`;

export type AboutUs = {
  title: string;
  subtitle: string;
  description: PortableTextBlock[];
  image: ImageAsset;
  _id: string;
  _rev: string;
};

export const aboutUsQuery = groq`*[_type == "aboutUs"]{
    title,
    subtitle,
    description,
    image
}`;

export type Education = {
  title: string;
  subtitle: string;
  description: PortableTextBlock[];
  image: ImageAsset;
  _id: string;
  _rev: string;
};

export const educationQuery = groq`*[_type == "education"]{
    title,
    subtitle,
    description,
    image
}`;

export type Review = {
  sectionTitle: string;
  title: string;
  review: PortableTextBlock[];
  author: string;
  date: any;
  rating: number;
  _id: string;
  _rev: string;
};

export const reviewsQuery = groq`*[_type == "reviews"]{
    sectionTitle,
    title,
    review,
    author,
    date,
    rating
}`;

export type Steps = {
  stepTitle: string;
  description: PortableTextBlock[];
  _id: string;
  _rev: string;
};

export const stepsQuery = groq`*[_type == "steps"] | order(createdDate desc){
   stepTitle,
   description
}`;

export type Hero = {
  title: string;
  content: PortableTextBlock[];
  image: ImageAsset;
  _id: string;
  _rev: string;
};

export const heroQuery = groq`*[_type == "hero"]{
    id,
    title,
    content,
    image

}`;

export type AboutUsPage = {
  title: string;
  subtitle: string;
  content: PortableTextBlock[];
  image: ImageAsset;
  _id: string;
  _rev: string;
};

export const aboutUsPageQuery = groq`*[_type == "aboutUsPage"]{
    title,
    subtitle,
   content,
    image,
    _id,
    _rev
}`;

export type Banner = {
  title: string;
  content: PortableTextBlock[];
  _id: string;
  _rev: string;
  url: string;
};

export const bannerQuery = groq`*[_type == "banner"]{
    title,
    _id,
    _rev,
    content,
    url

}`;
