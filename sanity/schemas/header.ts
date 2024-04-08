import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
});
