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
          title={"AI course"}
          subTitle={
            "• Empower Your Future: Dive into Machine Learning Today, Shape Tomorrow's Innovations! "
          }
          content={[
            "• Learn to Machine, Earn the Future Scene",
            "• Code to Create, Learn to Innovate",
          ]}
          imgPath={"/ai-competition/background.png"}
        />
      </main>
    </>
  );
}
