import Head from "next/head";
import HeroSection from "../../components/HeroSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NormalTextArea from "../../components/NormalTextArea";
import { basePath } from "@/app/config";

export default function AICompetition() {
  return (
    <>
      <Head>
        <title>AP程式 升學專家</title>
        <meta
          name="description"
          content="Empower Your Future: Dive into Machine Learning Today, Shape Tomorrow's Innovations!"
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

        <Footer />
      </main>
    </>
  );
}
