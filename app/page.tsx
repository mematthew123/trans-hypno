import About from '@/components/About';
import BenefitsComponent from '@/components/Benefits';
import ContentComponent from '@/components/Content';
import CallToActionComponent from '@/components/Cta';
import FaqsComponents from '@/components/FaqsComponent';
import HeroComponent from '@/components/Hero';
import ReviewsComponent from '@/components/Reviews';
import TeamComponent from '@/components/Team';
import { client } from '@/sanity/lib/client';
import { faqsQuery } from '@/sanity/lib/queries';
import { pageContentQuery } from '@/sanity/lib/queries';

const faqs = await client.fetch(faqsQuery);
console.log(faqs);
const pageContent = await client.fetch(pageContentQuery);

export default function Home() {
  return (
    <>
      <HeroComponent />
      <BenefitsComponent />
      <ContentComponent />
      {/* <About /> */}
      <ReviewsComponent />
      <FaqsComponents faqs={faqs} />
      <TeamComponent />
      <CallToActionComponent />
    </>
  );
}
