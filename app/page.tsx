
import HomeFooter from "@/components/ui/home/footer_section.";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { NodeBackground } from "@/components/ui/home/new/node-background";
import HeroSection from "@/components/ui/home/new/hero";
import KeyFeature from "@/components/ui/home/new/key-feature";
import ForCommunity from "@/components/ui/home/new/for-community";
import ForCompanies from "@/components/ui/home/new/for-companies";
import LetsGo from "@/components/ui/home/new/lets-go";
import Hellofuture from "@/components/ui/home/new/hello-future";
import RoadMap from "@/components/ui/home/new/roadmap";


export default async function Home() {
  const sesssion = await getServerSession()
  if (sesssion) {
    redirect(`/rx/find-work`)
  }

  return (
    <div className=" w-full">
      <NodeBackground />
      <div className="flex min-h-screen flex-col bg-transparent ">
        <div className="min-h-screen">
          <HeroSection />
          <KeyFeature />
        </div>
        <div className="bg-white/10 ">
          <Hellofuture />
        </div>
        <div className="bg-white/15">
          <ForCommunity />
        </div>
        <div className="bg-white/30">
          <ForCompanies />
        </div>
        <RoadMap />
        <LetsGo />
        <HomeFooter />
      </div>
    </div>
  );

}
