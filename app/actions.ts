'use server';

import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { revalidateTag } from 'next/cache';

export default async function submit() {
  await sanityFetch({
    query: `*[_type == "post"]`,
    tags: ['posts'],
  });
  revalidateTag('posts');
}
