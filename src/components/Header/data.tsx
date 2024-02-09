import {
  CodeBracketIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  CubeTransparentIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
  SquaresPlusIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export interface SubLink {
  name: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

export const skillSubLink: SubLink[] = [
  {
    name: "Python能力養成",
    description:
      "本課程專為希望深入學習Python程式語言的初學者和進階學習者設計，從基礎語法學習到進階應用開發，逐步養成解決問題的能力，讓學員能夠在資料科學、網頁開發等多領域發光發熱。",
    href: "#",
    icon: CodeBracketIcon,
  },
  {
    name: "AI資料分析視覺化",
    description:
      "透過最新的AI技術和資料視覺化工具，本課程教導如何將龐大的數據轉化為易於理解的視覺報告。學習如何運用機器學習模型來預測趨勢，並透過視覺化技術讓數據故事講述更加生動。",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "網頁設計師",
    description:
      "本課程旨在培養學員成為專業的網頁設計師，學習從設計理念到實際操作的全套技能。課程內容包括最新的網頁設計趨勢、用戶體驗設計原則以及如何創建響應式網站，確保學員能在網頁設計領域中脫穎而出。",
    href: "#",
    icon: ComputerDesktopIcon,
  },
];

export const APCSSubLink: SubLink[] = [
  {
    name: "APCS Lv 0",
    description:
      "本課程為初學者設計，著重於C++的基礎知識和程式設計邏輯。學生將學習變數、控制結構、函式、以及簡單的資料結構，為進一步的學習打下堅實的基礎。透過實作練習和專案，學生能夠理解程式語言的基本概念，並開始解決簡單的程式設計問題。",
    href: "#",
    icon: CommandLineIcon,
  },

  {
    name: "APCS Lv 1",
    description:
      "第一級課程旨在進一步加深學生對C++和程式設計的理解。本課程將介紹更複雜的資料結構如串列、堆疊和隊列，以及基礎演算法的概念，包括排序和搜尋。學生將通過實際案例學習如何有效地運用這些工具來處理和分析數據，為解決更複雜的問題做準備。",
    href: "#",
    icon: PuzzlePieceIcon,
  },
  {
    name: "APCS Lv 2",
    description:
      "本課程為高級學習者設計，著重於高階程式設計技巧和演算法的應用。學生將學習進階資料結構（如樹狀結構和圖）、演算法分析，以及演算法策略，例如動態規劃和貪婪演算法。課程也將探討程式設計中的最佳實踐，讓學生能夠解決複雜的演算法問題。",
    href: "#",
    icon: CubeTransparentIcon,
  },
];

export const advanceSubLink: SubLink[] = [
  {
    name: "競程選手班",
    description:
      "此課程專為準備參加程式競賽的學生而設計，從基礎算法訓練到高階問題解決策略，全面提升解題速度與效率。學員將學習資料結構、演算法分析及優化技巧，並透過大量練習與模擬競賽，為國內外程式競賽做好充分準備。",
    href: "#",
    icon: RocketLaunchIcon,
  },

  {
    name: "AI競賽班",
    description:
      "AI競賽班專門針對希望在人工智慧領域展現實力的學員開設，課程涵蓋機器學習、深度學習基礎，以及最新的AI技術和應用。學員將通過實際的AI項目和競賽案例，學習如何設計、訓練和優化AI模型，為參加各種AI競賽做好準備。",
    href: `/skills/ai-competition`,
    icon: SquaresPlusIcon,
  },
  {
    name: "Leetcode面試班",
    description:
      "Leetcode面試班針對準備軟體工程師面試的學員設計，提供從基礎到進階的編碼面試題目訓練。課程將涵蓋數據結構、演算法、系統設計等關鍵領域，並透過實戰演練，幫助學員掌握解題技巧，提升面試競爭力。",
    href: `/skills/leetcode-interview`,
    icon: GlobeAltIcon,
  },
];

export interface MainLink {
  name: string;
  href: string;
  hasPopover?: boolean;
  subLinks?: SubLink[];
}

export const linksData: MainLink[] = [
  {
    name: "1對1升學指導(1by1)",
    href: "#",
  },
  {
    name: "實力養成",
    href: "#",
    hasPopover: true,
    subLinks: skillSubLink,
  },
  {
    name: "APCS課程",
    href: "#",
    hasPopover: true,
    subLinks: APCSSubLink,
  },
  {
    name: "進階課程",
    href: "#",
    hasPopover: true,
    subLinks: advanceSubLink,
  },
  {
    name: "上課方式",
    href: "#",
  },
  {
    name: "榮譽榜",
    href: "#",
  },
  {
    name: "聯絡我們",
    href: "#",
  },
];
