"use client";
import Link from "next/link";
import { postsQuery, categoriesQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import PageHeader from "@/components/PageHeader";
import Posts from "@/components/Posts";
import { useEffect, useState } from "react";
import CategorySelector from "@/components/CategorySelector";

export const revalidate = 10;

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

export default function PostsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await client.fetch(postsQuery, {
        categoryId: selectedCategory,
      });
      setPosts(posts);
    };

    fetchPosts();
  }, [selectedCategory]); // Refetch when selectedCategory changes

  return (
    <>
      <PageHeader
        title="Transcend Mind & Body Library"
        description="Our library is a collection of audio recordings that we have created to help you achieve your goals. They are designed to compliment your sessions. We have recordings for weight loss, smoking cessation, stress reduction, and more."
        image="/plant.jpg"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Image
              className="hidden md:block mx-auto w-auto h-auto md:h-full md:w-full  max-w-xl rounded-3xl"
              width="2000"
              height="864"
              src="/plant.jpg"
              alt="Our experts working together"
            />
            <div className="flex flex-col gap-10">
              {/* <!-- Blog Post Content--> */}
              <div className="space-y-8 sm:space-y-12">
                <h2 className="text-xl font-semibold tracking-tight sm:text-4xl">
                  Welcome to the Transcend Mind & Body Library
                </h2>
                <p className="text-xl font-medium tracking-tight ">
                  These recordings are available to you at no charge. While they
                  are not a substitute for therapy, they can be a helpful tool
                  to use in between sessions. There are recordings for weight
                  loss, smoking cessation, stress reduction, and more.
                </p>
                <p className="text-xl font-medium tracking-tight ">
                  We hope you enjoy our content and learn something new!
                </p>

                <p className="text-xl font-medium tracking-tight ">
                  If you have any questions or would like to schedule an
                  appointment, please call us at{" "}
                  <a href="tel:+1406-555-5555" className="text-primary-500">
                    (406) 555-5555
                  </a>
                </p>
              </div>
              <CategorySelector onSelectCategory={setSelectedCategory} />

            </div>
            {/* <!-- Here is our list of blog posts --> */}

          </div>
          <Posts posts={posts as any} />

        </div>
      </section>
    </>
  );
}
