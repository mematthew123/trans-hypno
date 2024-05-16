import Link from 'next/link';
import { postsQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { Metadata } from 'next';

export const revalidate = 1;

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

export const metadata: Metadata = {
  title: 'Zephyr Pixels Blog - Missoula, Montana',
  description: 'Welcome to the Zephyr Pixels Blog from Missoula, Montana',
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
              Welcome to the Zephyr Pixels Blog!
            </h1>
            <p className='mx-auto max-w-xl text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl'>
              Witty witty bang bang subtitle goes here.
            </p>
          </div>
        </div>
      </section>

      <section className='py-16 sm:py-20'>
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid gap-16 lg:grid-cols-2 lg:gap-24'>
            <Image
              className='mx-auto h-auto w-full max-w-xl rounded-3xl'
              width='576'
              height='864'
              src='/blastOff.png'
              alt='Our experts working together'
            />
            <div className='flex flex-col gap-10'>
              {/* <!-- Blog Post Content--> */}
              <div className='space-y-8 sm:space-y-12'>
                <h2 className=' text-primary-950/70 dark:text-primary-200/70 text-xl font-medium tracking-tight sm:text-4xl'>
                  Welcome to the Zephyr Pixels Blog!
                </h2>
                <h2 className=' text-primary-950/70 dark:text-primary-200/70 text-xl font-medium tracking-tight '>
                  Check this page for updates on cool projects, new
                  technologies, best practices, How-to guides, and more!
                </h2>
                <p className='text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg'>
                  Teaching and learning are at the core of pushing technology
                  and design forward. Remaining curious and open to new ideas is
                  essential to our growth as a company and as individuals.
                </p>
                <p className='text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg'>
                  Some articles will be cross-posted from dev.to, but there will
                  be exclusive content here as well.
                </p>
              </div>
            </div>

            {/* <!-- Here is our list of blog posts --> */}
            {posts.map((post: any) => (
              <Link href={`library/${post.slug.current}`} key={post._id}>
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
                      className='rounded-xl w-full h-40 sm:h-64  object-center'
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
