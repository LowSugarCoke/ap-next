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

export const advanceSubLink: SubLink[] = [
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
  {
    name: "Andriod認證競賽班",
    description:
      "Android認證競賽班專為想要獲得Android開發認證的學員設計。這個課程涵蓋了從基礎到進階的Android開發技術，包括應用設計、開發、測試以及發布。學員將透過實作專案，學習如何使用最新的Android開發工具和框架，以及如何遵循最佳實踐來建造高效能的應用。完成課程後，學員將具備參加和通過Android開發者認證考試的能力，進而提升職業競爭力。",
    href: "#",
    icon: RocketLaunchIcon,
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
    href: "/apcs",
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
    name: "聯絡我們",
    href: "#",
  },
];
