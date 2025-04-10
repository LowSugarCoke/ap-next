"use client";
import Image from "next/image";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useRef } from "react";
import Header from "../components/Header/index";
import { ListWithAvatar } from "../components/ListWithAvatar/index";
import Footer from "../components/Footer/index";

export default function Home() {
  const listRef = useRef<null | HTMLDivElement>(null);
  const listRef2 = useRef<null | HTMLDivElement>(null);

  const isVisible = useIntersectionObserver({
    elementRef: listRef,
    options: {
      root: null,
      rootMargin: "0px",
      threshold: 0.0,
    },
  });

  const isVisible2 = useIntersectionObserver({
    elementRef: listRef2,
    options: {
      root: null,
      rootMargin: "0px",
      threshold: 0.0,
    },
  });

  return (
    <main className="bg-custom-gradient  flex flex-col items-center  ">
      <Header />

      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[100vh] animate-fade-in-down">
        <Image
          className="object-cover object-center "
          src="banner.png"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />

        <div
          className="
          absolute 
          top-[62%] sm:top-1/3 md:top-1/4
          left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-center bg-white/80 backdrop-blur-sm 
          px-2 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 
          rounded-xl shadow-md 
          w-[90%] max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
        "
        >
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-3">
            📢 最新消息
          </h2>
          <ul className="text-xs sm:text-sm md:text-base text-gray-800 space-y-2 text-left sm:text-center leading-relaxed">
            <li>
              🎓 六位國際生全部錄取全美 Top 5 CS/EE：
              UIUC、CMU、MIT、UC、CU、Duke、UofT
            </li>
            <li>💡 2025 特選錄取 清大資工／交大資工＋Toi選訓營2位</li>
            <li>🏆 數位 APCS 滿級分</li>
            <li>🧠 留學 know-how 私訊了解，不公開說明</li>
          </ul>
        </div>
      </div>

      <div
        ref={listRef}
        className={`w-full h-1/2  flex items-center ${
          isVisible ? "fadeOutUpwards" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto h-2/7 p-8 bg-white rounded-lg shadow-md border border-gray-200 mt-10 ">
          <div className="flex flex-col items-center text-center pb-8">
            <h1 className="font-taipei-bold  my-4 text-3xl">關於AP程式</h1>
            <p className="font-taipei text-left">
              &nbsp; &nbsp; &nbsp; &nbsp;我們致力於精英化教育，旨在幫助學生在
              <strong>&quot;最短時間&quot;</strong>
              內達成他們的學習目標。我們提供一對一或一對少數學生的小班教學方式，由一支擁有8位資訊領域博士專家組成的團隊，加上多位來自台灣頂尖大學具豐富教學經驗的大學及碩士級學生加盟。我們在每個領域都配備了最專業的教師，這一點與其他商業補習班大相徑庭。我們的教學不僅直接對學生進行，更對學生的升學和生涯發展提供了最直接的助益。{" "}
            </p>
          </div>
        </div>
      </div>

      <div
        ref={listRef2}
        className={`w-full h-1/2 flex items-center ${
          isVisible2 ? "fadeOutUpwards" : ""
        }`}
      >
        <ListWithAvatar />
      </div>

      <Footer />
    </main>
  );
}
