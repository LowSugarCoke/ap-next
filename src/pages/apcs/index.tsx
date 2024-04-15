import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NormalTextArea from "@//components/NormalTextArea";
import Image from "next/image";
import TeacherCard from "@/components/TeacherCard";
import { basePath } from "@/app/config";
import { teachersCardData } from "./data";

export default function APCS() {
  return (
    <>
      <Head>
        <title>AP程式 升學專家</title>
        <meta
          name="description"
          content="APCS放榜!! 一月實作滿級分25人，有3位是我們學生。APCS是台灣目前最具公信力的國高中生程式能力檢測，也被許多大學資訊相關科系視為入學申請的加分項目，甚至作為學生進入額外入學管道的基礎。"
        />

        <link rel="icon" href={`${basePath}/Ap_logo_small.ico`} />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between bg-custom-gradient">
        <Header />

        <HeroSection
          highlight={[
            "APCS放榜!! 一月實作滿級分25人，有3位是我們學生。",
            "🥇高雄國中同學，實作滿級分 (總9)",
            "🥇共有三位滿級分同學，一位竹北高中同學，一小時寫完4題全對",
            "🥇考題走勢被我們完全命中",
          ]}
          title={"APCS課程"}
          subTitle={[
            "APCS是台灣目前最具公信力的國高中生程式能力檢測，也被許多大學資訊相關科系視為入學申請的加分項目，甚至作為學生進入額外入學管道的基礎。",
          ]}
          imgPath={"/apcs/apcs.jpg"}
        />

        <NormalTextArea
          className="w-full md-w-3/5 lg-w-1/2 bg-white/50 rounded-lg shadow-lg "
          title={"🥇七個月，體育班的孩子考到APCS八級分🥇"}
          content={[
            "2023年2月底，高雄某體育班的同學，想嘗試不同的升學管道-寫程式",
            "他沒有過多的程式經驗，但上了AP程式七個月的C++課程。獲得了8級分（觀念4實作4）。",
            "▶️同學每週上一次1.5小時的線上課程，總計上了約50小時。",
            "▶️同學完成了Level 2的作業，以及定期參與每周免費的模擬考。",
            "🥇他已參加了兩場大型的程式競賽，這將有助於他們在大學申請時獲得大大加分。",
            "這位同學並不是特例...",
          ]}
        />

        <NormalTextArea
          title={"入門班"}
          content={[
            "本課程透過10節、共20-30小時的課堂學習、每周都有作業，以及期末考試，旨在深化學生對APCS的瞭解，實作題達到2級分，總級分達4~5級分。以確保學生能夠順利完成APCS檢定考試。透過本課程，學生將建立堅實的程式設計基礎和解題技巧，同時豐富其學習檔案。",
          ]}
        />

        <NormalTextArea
          title={"刷題班"}
          content={[
            "本課程設計為20小時，分為8節課程，專注於APCS考試的準備，透過深入探討APCS相關題型，我們將進行豐富的題目練習。學生每週將獲得針對性的家庭作業，預期總計完成50道實作題目，覆蓋初級和中級難度。本課程旨在協助學生達到實作題第3級分及觀念題3至4級分的目標，為學生在APCS考試中取得至少總級分6~7級的成績打下堅實基礎。",
          ]}
        />

        <NormalTextArea
          title={"滿級分衝刺班"}
          content={[
            "設計40小時課程，分成上期20小時及下期20小時，這個課程的目標是使用C++來解決歷年的APCS考試中的第三和第四題，並且完成至少8成以上的題目與百題例題。",
          ]}
        />

        <NormalTextArea title={"專業師資"} />

        <div className="w-full lg:w-10/12 flex flex-row flex-wrap justify-center  lg:space-x-4 mt-8">
          {teachersCardData.map((item, index) => (
            <TeacherCard
              key={index}
              name={item.name}
              imageUrl={item.imageUrl}
              major={item.major}
              experience={item.experience}
            />
          ))}
        </div>

        <div className="w-full flex justify-center items-center mt-8 relative">
          <Image
            src="/apcs/certification_1.png"
            alt="Icon"
            width="1064"
            height="500"
          />
        </div>

        <div className="w-full flex justify-center items-center mt-8 relative">
          <Image
            src="/apcs/certification_2.png"
            alt="Icon"
            width="1064"
            height="500"
          />
        </div>

        <div className="w-full flex justify-center items-center mt-8 relative mb-8">
          <Image
            src="/apcs/certification_3.png"
            alt="Icon"
            width="1064"
            height="500"
          />
        </div>

        <Footer />
      </main>
    </>
  );
}
