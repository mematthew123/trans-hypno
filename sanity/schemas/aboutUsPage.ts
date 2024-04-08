import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutUsPage',
  title: 'About Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
});
