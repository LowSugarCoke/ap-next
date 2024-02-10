import Head from "next/head";
import HeroSection from "../../components/HeroSection";
import Header from "../../components/Header";
import NormalTextArea from "../../components/NormalTextArea";
import { basePath } from "@/app/config";
import Footer from "@/components/Footer";

export default function LeetcodeInterview() {
  return (
    <>
      <Head>
        <title>AP程式 升學專家</title>
        <meta name="description" content="" />

        <link rel="icon" href={`${basePath}/Ap_logo_small.ico`} />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between bg-custom-gradient">
        <Header />
        <HeroSection
          title={"Leetcode面試班"}
          subTitle={[
            "核⼼演算法教學 : 涵蓋排序、樹結構、動態規劃等⾯試關鍵主題，從基礎到進階，為⾯試鋪路。",
          ]}
          imgPath={"/leetcode-interview/background.png"}
        />

        <NormalTextArea
          title={"什麼是 Leetcode?"}
          content={[
            "LeetCode 擁有 2000 多題的程式題⽬，難度從簡單到困難不等，題⽬涉及多種程式語⾔與覆蓋了資料結構、演算法、離散數學、數據庫等多個計算機科學領域，可以利⽤其中的題⽬充實⾃⼰的能⼒。除此之外，也會不定期舉辦周賽，可以讓有想挑戰的⼈體驗線上比賽的感覺。",
          ]}
        />

        <NormalTextArea
          title={"課程介紹"}
          content={[
            "外商軟體和台灣的頂尖半導體公司，都將演算法和資料結構的現場應⽤能⼒作為衡量⾯試者技術⽔準的重要標準。正因如此，深入練習 leetcode 是踏入這些公司⾨檻的關鍵步驟。然⽽，⾯對 leetcode 龐⼤且多元的題庫，求職者往往缺乏動⼒或沒有系統性訓練。本課程強調清晰、易讀且簡潔的程式碼撰寫技巧，更通過對比和融合不同解題思路，強化資料結構和演算法。台清交電機資⼯碩博⼠團隊研發教材，並模擬團體⾯試，使你擁有軟體科技業⾯試的⼀線競爭⼒。",
          ]}
        />
        <NormalTextArea
          title={"如何有效率的 Leetcode 刷題？"}
          content={[
            "✓ 理解基礎知識：在開始解難題之前，確保對基礎的數據結構和算法有堅實的理解。這包括陣列、linked list、樹、圖論、stack、queue、排序算法和搜索算法等。",
            "✓ 分階段學習：將學習過程分為幾個階段。初期，專注於理解和掌握基本概念。隨著你的能⼒提升，逐漸過渡到更複雜的問題。",
            "✓ 分類刷題：按照算法類型或資料結構分類解題，這樣可以幫助你更深入地理解每種類型的特點和常⽤解題模式，不會解到後⾯題數變多時，便忘記之前的解法。",
            "✓ 從易到難：開始時先解簡單y的題⽬，逐步過渡到中等和困難題。這有助於建立信⼼，同時逐步提升解題技巧。",
            "✓ 分析和總結 : 每解決⼀個問題後，都要花時間去理解最佳解法。老師會幫助你分析你的解法和其他⾼效解法之間的差異，並總結學習。",
          ]}
        />
        <Footer />
      </main>
    </>
  );
}
