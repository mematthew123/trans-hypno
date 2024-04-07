import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'steps',
  title: 'Steps',
  type: 'document',
  fields: [
    defineField({
      name: 'stepTitle',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
});
