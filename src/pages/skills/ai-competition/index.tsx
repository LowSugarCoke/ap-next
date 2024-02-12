import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@//components/Footer";
import NormalTextArea from "@//components/NormalTextArea";
import AudienceBlock from "@//components/AudienceBlock";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import LearningTimeline from "@/components/LearningTimeline";
import { learningStages } from "./data";
import { audienceData } from "./data";
import { basePath } from "@/app/config";

export default function AICompetition() {
  return (
    <>
      <Head>
        <title>AP程式 升學專家</title>
        <meta
          name="description"
          content="AP課程旨在以最有效率的方式，幫助學生在APCS考試中獲得最高分數。憑藉我們團隊超過10,000小時的APCS家教經驗，我們精心設計了詳細的APCS課程大綱，以實際成績作為我們教學成效的最佳證明。我們提供的是客製化、精緻的教育方案，包括一對一教學、小班課程或自學影片，以滿足不同學生的學習需求。"
        />

        <link rel="icon" href={`${basePath}/Ap_logo_small.ico`} />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between bg-custom-gradient">
        <Header />
        <HeroSection
          title={"AI競賽班"}
          subTitle={[
            "本課程搭建堅實的AI與機器學習理論基礎，並通過Kaggle競賽的實戰經驗，透過解決實際問題來磨練程式技能。",
          ]}
          imgPath={"/ai-competition/background.png"}
        />

        <NormalTextArea
          title={"課程介紹"}
          content={[
            "AI領域在此時代快速崛起，除了學術期刊上關於機器學習的論文數量正在指數級上升，也是眾多企業發展的核⼼戰略。因此擁有此領域的學習能⼒，是培養此時代的核⼼競爭⼒之⼀。本課程搭建堅實的AI與機器學習理論基礎，並通過Kaggle競賽的實戰經驗，透過解決實際問題來磨練程式技能。此網站透過解決實際問題激發學⽣對於AI領域的熱誠，能在升學檔案中快速累積作品集，更能累積在就業市場的競爭⼒。",
          ]}
        />

        <TwoColumnLayout
          leftColumn={
            <div>
              <LearningTimeline stages={learningStages} className="mt-10" />
            </div>
          }
          rightColumn={
            <div>
              <AudienceBlock {...audienceData} className="mt-10" />
            </div>
          }
        />

        <Footer />
      </main>
    </>
  );
}
