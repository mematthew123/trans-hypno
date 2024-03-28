'use client';

import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { SanityDocument } from '@sanity/client';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import ImageComponent from '@/components/ImageComponent';

const builder = imageUrlBuilder(client);

type PortableTextRendererProps = {
  content: {
    content: any;
  };
};

const PortableTextRenderer = ({ content }: PortableTextRendererProps) => (
  <PortableText
    value={content as any}
    components={{
      types: {
        image: ImageComponent, // Here we specify our custom image component
      },
    }}
  />
);

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <main className='container mx-auto prose prose-lg p-4'>
      {/* <h1 className='text-4xl font-bold'>{post?.title}</h1> */}
      {/* {post?.mainImage ? (
        <Image
          className='float-left m-0 w-1/3 mr-4 rounded-lg'
          src={builder.image(post.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={post?.mainImage?.alt}
        />
      ) : null} */}
      {post?.body ? <PortableTextRenderer content={post.body} /> : null}
    </main>
  );
}
