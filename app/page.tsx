import About from '@/components/About';
import BenefitsComponent from '@/components/Benefits';
import ClipSideBySideComponent from '@/components/ClipSidebySide';
import ContentComponent from '@/components/Content';
import CallToActionComponent from '@/components/Cta';
import FaqsComponents from '@/components/FaqsComponent';
import HeroComponent from '@/components/Hero';
import ReviewsComponent from '@/components/Reviews';
import Steps from '@/components/Steps';
import TeamComponent from '@/components/Team';
import { client } from '@/sanity/lib/client';
import { faqsQuery } from '@/sanity/lib/queries';
import { pageContentQuery } from '@/sanity/lib/queries';

export default async function Page() {
  const faqs = await client.fetch(faqsQuery);
  console.log(faqs);

  return (
    <>
      <HeroComponent />
      <Steps />
      <BenefitsComponent />
      <ClipSideBySideComponent />
      <ReviewsComponent />
      <FaqsComponents faqs={faqs} />
      <CallToActionComponent />
    </>
  );
}
