import Head from "next/head";
import HeroSection from "../../components/HeroSection";
import Header from "../../components/Header";
import { basePath } from "@/app/config";

export default function AICompetition() {
  return (
    <>
      <Head>
        <title>AP 程式</title>
        <meta
          name="description"
          content="Empower Your Future: Dive into Machine Learning Today, Shape Tomorrow's Innovations!"
        />

        <link rel="icon" href={`${basePath}/Ap_logo_small.ico`} />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between ">
        <Header />
        <HeroSection
          title={"AI競賽班"}
          subTitle={[
            "本課程搭建堅實的AI與機器學習理論基礎，並通過Kaggle競賽的實戰經驗，透過解決實際問題來磨練程式技能。",
          ]}
          imgPath={"/ai-competition/background.png"}
        />
      </main>
    </>
  );
}
