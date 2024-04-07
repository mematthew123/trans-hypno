import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import benefits from './schemas/benefits';
import faqs from './schemas/faqs';
import pageContent from './schemas/pageContent';
import aboutUs from './schemas/aboutUs';
import education from './schemas/education';
import reviews from './schemas/reviews';
import steps from './schemas/steps';
import hero from './schemas/hero';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    hero,
    benefits,
    faqs,
    pageContent,
    aboutUs,
    education,
    reviews,
    steps,
  ],
};
