import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
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
    icon: ChartPieIcon,
  },
  {
    name: "AI資料分析視覺化",
    description:
      "透過最新的AI技術和資料視覺化工具，本課程教導如何將龐大的數據轉化為易於理解的視覺報告。學習如何運用機器學習模型來預測趨勢，並透過視覺化技術讓數據故事講述更加生動。",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "網頁設計師",
    description:
      "本課程旨在培養學員成為專業的網頁設計師，學習從設計理念到實際操作的全套技能。課程內容包括最新的網頁設計趨勢、用戶體驗設計原則以及如何創建響應式網站，確保學員能在網頁設計領域中脫穎而出。",
    href: "#",
    icon: FingerPrintIcon,
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
  },
  {
    name: "進階課程",
    href: "#",
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
