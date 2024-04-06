import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faqs',
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [{ type: 'text' }],
    }),
  ],
});
