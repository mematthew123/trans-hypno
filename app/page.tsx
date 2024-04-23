import Banner from "@/components/Banner";
import BenefitsComponent from "@/components/Benefits";
import ClipSideBySideComponent from "@/components/ClipSidebySide";
import CallToActionComponent from "@/components/Cta";
import FaqsComponents from "@/components/FaqsComponent";
import GetStarted from "@/components/GetStarted";
import GirdStats from "@/components/GirdStats";
import HeroComponent from "@/components/Hero";
import ReviewsComponent from "@/components/Reviews";
import SideContent from "@/components/SideContent";
import StepsComponent from "@/components/Steps";
import Steps from "@/components/Steps";
import { client } from "@/sanity/lib/client";
import { faqsQuery } from "@/sanity/lib/queries";

export const revalidate = 3; // 3 seconds

export default async function Page() {
  const faqs = await client.fetch(faqsQuery);

  return (
    <>
      <HeroComponent />
      <GetStarted />
      {/* <SideContent /> */}
      {/* <StepsComponent />
      <BenefitsComponent /> */}
      <ClipSideBySideComponent />
      <ReviewsComponent />
      <FaqsComponents faqs={faqs} />
      <CallToActionComponent />
    </>
  );
}
