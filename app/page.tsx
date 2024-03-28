import ContentComponent from '@/components/Content';
import CallToActionComponent from '@/components/Cta';
import HeroComponent from '@/components/Hero';
import ReviewsComponent from '@/components/Reviews';
import ServicesComponent from '@/components/Services';
import TeamComponent from '@/components/Team';

export default function Home() {
  return (
    <>
      <HeroComponent />
      <ServicesComponent />
      {/* <ExpertiseComponent /> */}
      {/* <SideBySide /> */}
      <ContentComponent />
      <ReviewsComponent />
      {/* <ProjectsComponent /> */}
      <TeamComponent />
      <CallToActionComponent />
    </>
  );
}
