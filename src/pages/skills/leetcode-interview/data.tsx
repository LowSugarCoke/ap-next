import { AudienceBlockProps } from "../../../components/AudienceBlock";
import { LearningStage } from "../../../components/LearningTimeline";
import { basePath } from "../../../app/config";
import {
  BookOpenIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";

export const learningStages: LearningStage[] = [
  {
    icon: BookOpenIcon,
    title: "核⼼演算法教學",
    description:
      "涵蓋排序、樹結構、動態規劃等⾯試關鍵主題，從基礎到進階，為⾯試鋪路。",
    iconColorClass: "text-blue-500",
  },
  {
    icon: ChartBarIcon,
    title: "專業領域深掘",
    description:
      "結合作業系統(OS)、物件導向程式設計(OOP)等進階主題，加強實戰能⼒，並透過專屬群組⽀援解答疑問，分享學習資源。",
    iconColorClass: "text-green-500",
  },
  {
    icon: ChatBubbleBottomCenterIcon,
    title: "模擬⾯試練習",
    description:
      "透過⼀對⼀模擬⾯試和⾯試官反饋，深入分析⾯試題⽬，提升解題策略和⾃信⼼。",
    iconColorClass: "text-purple-500",
  },
];

export const audienceData: AudienceBlockProps = {
  title: "適合對象",
  description: [
    "對⼤學程式設計不上⼿",
    "想要上資料結構或演算法先修班",
    "想在科技業找到好⼯作",
  ],
  learnings: [
    {
      icon: "C++",
      iconPath: `${basePath}/learning-icon/c-plus-plus.png`,
    },
    {
      icon: "Leetcode",
      iconPath: `${basePath}/learning-icon/leetcode.png`,
    },
  ],
};
