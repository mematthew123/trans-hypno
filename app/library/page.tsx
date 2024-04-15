import Link from 'next/link';
import { postsQuery,categoriesQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import PageHeader from '@/components/PageHeader';

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

export default async function PostsPage() {
  const posts = await client.fetch<Post[]>(postsQuery);
  const categories = await client.fetch(categoriesQuery);

  console.log(posts);
  if (posts.length > 0) {
    console.log(posts[0]?.mainImage?.asset?.url); // access the mainImage property on the first post
  }

  return (
    <>

      <PageHeader
        title='Transcend Mind & Body Library'
        description='Our library is a collection of audio recordings that we have created to help you achieve your goals. They are designed to compliment your sessions. We have recordings for weight loss, smoking cessation, stress reduction, and more.'
        image='/plant.jpg'
      />

      <section className='py-16 sm:py-20'>
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid gap-16 lg:grid-cols-2 lg:gap-24'>
            <Image
              className='hidden md:block mx-auto w-auto h-auto md:h-full md:w-full  max-w-xl rounded-3xl'
             width='2000'
              height='864'
              src='/plant.jpg'
              alt='Our experts working together'
            />
            <div className='flex flex-col gap-10'>
              {/* <!-- Blog Post Content--> */}
              <div className='space-y-8 sm:space-y-12'>
                <h2 className='text-xl font-semibold tracking-tight sm:text-4xl'>
                  Welcome to the Transcend Mind & Body Library
                </h2>
                <p className='text-xl font-medium tracking-tight '>
                These recordings are available to you at no charge. 
While they are not a substitute for therapy, they can be a helpful tool to use in between sessions.
There are recordings for weight loss, smoking cessation, stress reduction, and more.
                </p>
                <p className='text-xl font-medium tracking-tight '>
                  We hope you enjoy our content and learn something new!
                </p>

                <p className='text-xl font-medium tracking-tight '>
                  If you have any questions or would like to schedule an
                  appointment, please call us at{' '}
                  <a href='tel:+1406-555-5555' className='text-primary-500'>
                    (406) 555-5555
                  </a>
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
                    <p className='text-base text-primary-950/70  sm:text-lg'>
                      {post.excerpt}
                    </p>
                    
                   

                    <p className='text-base text-primary-950/70  sm:text-lg'>
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
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
