import BenefitsComponent from '@/components/Benefits';
import ContentComponent from '@/components/Content';
import CallToActionComponent from '@/components/Cta';
import FaqsComponents from '@/components/FaqsComponent';
import HeroComponent from '@/components/Hero';
import TeamComponent from '@/components/Team';
import { client } from '@/sanity/lib/client';
import { faqsQuery } from '@/sanity/lib/queries';

const faqs = await client.fetch(faqsQuery);

export default function Home() {
  return (
    <>
      <HeroComponent />
      <BenefitsComponent />
      {/* <ExpertiseComponent /> */}
      {/* <SideBySide /> */}
      <ContentComponent />
      <FaqsComponents faqs={faqs} />
      {/* <ProjectsComponent /> */}
      <TeamComponent />
      <CallToActionComponent />
    </>
  );
}
