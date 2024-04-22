import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import CategorySelector from "./CategorySelector";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  return (
    <main className=" w-full mt-12 mx-auto gap-8 grid grid-cols-1 md:grid-cols-3 divide-blue-100">
      {" "}
      {posts.map((post: any) => (
        <Link href={`library/${post.slug.current}`} key={post._id}>
          <div key={post._id}>
            <h2 className="mt-10 text-3xl font-medium tracking-tight sm:text-4xl">
              {post.title}
            </h2>
            <div className="space-y-2">
              <p className="text-base text-primary-950/70  sm:text-lg">
                {post.excerpt}
              </p>
              <Image
                src={urlForImage(post.mainImage).url() || ""}
                alt={post.title}
                height={500}
                width={500}
                className="rounded-xl w-full h-40 sm:h-64 gap-4 object-cover  object-center"
              />
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}
