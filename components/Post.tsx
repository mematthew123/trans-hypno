"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import ImageComponent from "@/components/ImageComponent";


export const revalidate = 1;

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

type Post = {
  mainImage: {
    asset: {
      url: string;
      type: string;
    };
  };
  categories: {
    title: string;
    _id: string;
  }[];
  title: string;
  excerpt: string;
  publishedAt: string;
  slug: {
    current: string;
  };
  _id: string;
};

export default function Post({ post }: { post: SanityDocument }) {
  const [recordingUrl, setRecordingUrl] = useState("");

  useEffect(() => {
    async function fetchRecordingUrl() {
      // Assuming `client` is configured with your project details
      if (post?.recording?.asset?._ref) {
        const assetId = post.recording.asset._ref;
        const asset = await client.fetch(`*[_id == $id][0]`, { id: assetId });
        if (asset && asset.url) {
          setRecordingUrl(asset.url);
        }
      }
    }

    fetchRecordingUrl();
  }, [post]);

  return (
    <section className=" py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="container mx-auto prose prose-lg p-4">
          <h1 className="text-4xl font-bold">{post?.title}</h1>
          {post?.mainImage ? (
            <Image
              className=" m-0 p-0 object-cover w-auto h-auto md:h-full md:w-full  max-w-xl rounded-3xl"
              src={builder.image(post.mainImage).width(300).height(300).url()}
              width={600}
              height={300}
              alt={post?.mainImage?.alt}
              quality={100}
              priority
            />
          ) : null}
          {post?.body ? <PortableTextRenderer content={post.body} /> : null}
          {recordingUrl && <audio controls src={recordingUrl} />}
        </div>
      </div>
    </section>
  );
}
