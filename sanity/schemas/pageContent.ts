import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hypnotherapyContent',
  title: 'Hypnotherapy Content',
  type: 'document',
  fields: [
    defineField({
      name: 'introTitle',
      title: 'Intro Title',
      type: 'string',
    }),

    defineField({
      name: 'mainContent',
      title: 'Content',
      type: 'blockContent',
    }),

    defineField({
      name: 'testimonial',
      title: 'Quote',
      type: 'string',
    }),
  ],
});
