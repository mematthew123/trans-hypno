import Link from 'next/link';
import { postsQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

export const revalidate = 10;

type Post = {
  mainImage: {
    asset: {
      url: string;
      type: string;
    };
  };
  title: string;
  excerpt: string;
  publishedAt: string;
  slug: {
    current: string;
  };
  _id: string;
};

export default async function PostsPage() {
  const posts = await client.fetch<Post[]>(postsQuery);

  console.log(posts);
  if (posts.length > 0) {
    console.log(posts[0]?.mainImage?.asset?.url); // access the mainImage property on the first post
  }

  return (
    <>
      <section className='py-16 sm:py-20'>
        <div className='mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='flex flex-col gap-4 sm:gap-6'>
            <h1 className='text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl'>
              Missoula Auto Repair Blog
            </h1>
          </div>
        </div>
      </section>

      <section className='py-16 sm:py-20'>
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid gap-16 lg:grid-cols-2 lg:gap-24'>
            <Image
              className='mx-auto h-full w-full max-w-xl rounded-3xl'
              width='576'
              height='864'
              src='/taillight.jpg'
              alt='Our experts working together'
            />
            <div className='flex flex-col gap-10'>
              {/* <!-- Blog Post Content--> */}
              <div className='space-y-8 sm:space-y-12'>
                <h2 className='text-xl font-medium tracking-tight sm:text-4xl'>
                  Welcome to Missoula Auto Repair Blog!
                </h2>
                <p className='text-xl font-medium tracking-tight '>
                  We are excited to share our knowledge and expertise with you.
                  We will be posting regularly about common car problems,
                  maintenance tips, and more!
                </p>
                <p className='text-xl font-medium tracking-tight '>
                  We hope you enjoy our content and learn something new!
                </p>

                <p className='text-xl font-medium tracking-tight '>
                  If you have any questions or would like to schedule an
                  appointment, please call us at{' '}
                  <a href='tel:+1406204779' className='text-yellow-600'>
                    (406) 204-7798
                  </a>
                </p>
              </div>
            </div>

            {/* <!-- Here is our list of blog posts --> */}
            {posts.map((post: any) => (
              <Link href={`blog/${post.slug.current}`} key={post._id}>
                <div key={post._id}>
                  <h2 className='mt-10 text-3xl font-medium tracking-tight sm:text-4xl'>
                    {post.title}
                  </h2>
                  <div className='space-y-6'>
                    <p className='text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg'>
                      {post.excerpt}
                    </p>
                    <p className='text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg'>
                      {post.publishedAt}
                    </p>
                    {/* <p className='text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg'>
                      {post.slug.current}
                    </p> */}
                    <Image
                      src={urlForImage(post.mainImage).url() || ''}
                      alt={post.title}
                      height={500}
                      width={500}
                      className='rounded-xl w-full h-40 sm:h-64 object-cover  object-center'
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
