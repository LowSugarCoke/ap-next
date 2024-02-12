import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NormalTextArea from "@//components/NormalTextArea";
import AudienceBlock from "@//components/AudienceBlock";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import LearningTimeline from "@/components/LearningTimeline";
import { basePath } from "@/app/config";
import { AudienceBlockProps } from "@/components/AudienceBlock";
import { LearningStage } from "@/components/LearningTimeline";
import {
  BookOpenIcon,
  ChartBarIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  ServerIcon,
  ChatBubbleBottomCenterIcon,
  PlayIcon,
  StarIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const learningStages: LearningStage[] = [
  {
    icon: BookOpenIcon,
    title: "Python 基礎",
    description:
      "開始學習Python的基礎語法，包括變數、條件語句、迴圈等基本概念。",
    iconColorClass: "text-blue-500",
  },
  {
    icon: ChartBarIcon,
    title: "數據預處理",
    description:
      "學習使用Numpy和Pandas進行數據清洗、轉換，為後續的數據分析和機器學習預處理數據。",
    iconColorClass: "text-green-500",
  },
  {
    icon: AcademicCapIcon,
    title: "特徵提取",
    description: "掌握PCA、t-SNE、LDA等降維和特徵提取技術。",
    iconColorClass: "text-purple-500",
  },
  {
    icon: ServerIcon,
    title: "分類 / 回歸",
    description: "學習SVM、RNN、CNN、決策樹等模型的理論基礎和應用。",
    iconColorClass: "text-red-500",
  },
  {
    icon: PuzzlePieceIcon,
    title: "聚類",
    description: "熟悉K-means、E-M算法等無監督學習中的聚類方法。",
    iconColorClass: "text-orange-500",
  },
  {
    icon: ChatBubbleBottomCenterIcon,
    title: "自然語言處理",
    description: "使用NLTK、Transformers、Spacy等工具和模型進行語言數據處理。",
    iconColorClass: "text-teal-500",
  },
  {
    icon: PlayIcon,
    title: "強化學習",
    description: "探索Q-Learning、Deep Q-Networks等強化學習技術。",
    iconColorClass: "text-indigo-500",
  },
  {
    icon: StarIcon,
    title: "推薦系統",
    description: "學習基於用戶行為和偏好的協同過濾推薦算法。",
    iconColorClass: "text-yellow-400",
  },
  {
    icon: LightBulbIcon,
    title: "集成方法",
    description: "學習如何組合多個模型來提高預測的準確性。",
    iconColorClass: "text-yellow-500",
  },
];

const audienceData: AudienceBlockProps = {
  title: "適合對象",
  description: [
    "國⼩/國中 → 激發對AI領域興趣，培養程式基礎",
    "⾼中 → 升學歷程檔案加分，快速累積競賽經驗",
    "⼤學/在職⼈⼠ → 增加就業競爭⼒，加速培養此領域的⾃我學習能⼒",
  ],
  learnings: [
    {
      icon: "Python",
      iconPath: `${basePath}/learning-icon/python.svg`,
    },
    {
      icon: "PyTorch",
      iconPath: `${basePath}/learning-icon/pytorch.svg`,
    },
    {
      icon: "Kaggle",
      iconPath: `${basePath}/learning-icon/kaggle.svg`,
    },
  ],
};

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
              <LearningTimeline stages={learningStages} />
            </div>
          }
          rightColumn={
            <div>
              <AudienceBlock {...audienceData} />
            </div>
          }
        />
        <Footer />
      </main>
    </>
  );
}
