import ClipSideBySideComponent from "@/components/ClipSidebySide";
import CallToActionComponent from "@/components/Cta";
import FaqsComponents from "@/components/FaqsComponent";
import GetStarted from "@/components/GetStarted";
import HeroComponent from "@/components/Hero";
import ReviewsComponent from "@/components/Reviews";
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
