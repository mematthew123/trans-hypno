import { defineField, defineType } from "sanity";

export default defineType({
  name: "getStarted",
  title: "Get Started Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Main title for the Get Started section.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Introductory text for the Get Started section.",
    }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "stepTitle",
              title: "Step Title",
              type: "string",
              description: "Title for the step.",
            },
            {
              name: "stepDescription",
              title: "Step Description",
              type: "text",
              description: "Description for the step.",
            },
          ],
        },
      ],
      description: "Steps to get started.",
    }),
  ],
});
