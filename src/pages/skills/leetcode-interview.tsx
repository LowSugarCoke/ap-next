import Head from "next/head";
import HeroSection from "../../components/HeroSection";
import Header from "../../components/Header";
import { basePath } from "@/app/config";

export default function LeetcodeInterview() {
  return (
    <>
      <Head>
        <title>AP 程式</title>
        <meta name="description" content="" />

        <link rel="icon" href={`${basePath}/Ap_logo_small.ico`} />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between ">
        <Header />
        <HeroSection
          title={"Leetcode面試班"}
          subTitle={[
            "核⼼演算法教學 : 涵蓋排序、樹結構、動態規劃等⾯試關鍵主題，從基礎到進階，為⾯試鋪路。",
          ]}
          imgPath={"/leetcode-interview/background.png"}
        />
      </main>
    </>
  );
}
