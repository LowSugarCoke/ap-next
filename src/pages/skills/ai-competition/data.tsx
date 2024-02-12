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

export const learningStages: LearningStage[] = [
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

export const audienceData: AudienceBlockProps = {
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
