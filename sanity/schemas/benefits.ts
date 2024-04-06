import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'benefits',
  title: 'Benefits',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'benefitsImage',
      title: 'Benefits Image',
      type: 'image',
    }),
  ],
});
