import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import faqs from "./schemas/faqs";
import pageContent from "./schemas/pageContent";
import aboutUs from "./schemas/aboutUs";
import education from "./schemas/education";
import reviews from "./schemas/reviews";
import steps from "./schemas/steps";
import aboutUsPage from "./schemas/aboutUsPage";
import post from "./schemas/post";
import category from "./schemas/category";
import getStarted from "./schemas/getStarted";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    getStarted,
    aboutUs,
    education,
    faqs,
    reviews,
    steps,
    post,
    category,
    aboutUsPage,
    pageContent,
  ],
};
