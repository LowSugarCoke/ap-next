interface Teacher {
  name: string;
  role: string[];
  class: string[];
  imageUrl: string;
}

export const teachers: Teacher[] = [
  {
    name: "Nobel",
    role: ["清大資工博士"],
    class: ["AI機器人", "APCSA", "專業升學規劃"],
    imageUrl: "avatar_1.png",
  },
  {
    name: "Johnson",
    role: ["清交資工博士", "資深程式老師"],
    class: ["APCS", "APCSA"],
    imageUrl: "avatar_2.png",
  },
  {
    name: "Shawn",
    role: ["UCLA AI博士"],
    class: ["留學顧問與諮詢"],
    imageUrl: "avatar_3.png",
  },
  {
    name: "Clare",
    role: ["交大資工博士", "AI專家"],
    class: ["AI課程", "論文指導"],
    imageUrl: "avatar_4.png",
  },

  {
    name: "DX",
    role: ["清大資工大學 碩士", "書卷獎畢業"],
    class: ["APCS", "Leetcode", "科技業面試"],
    imageUrl: "avatar_5.png",
  },

  {
    name: "Michael",
    role: ["交大資訊類碩士"],
    class: ["APCS", "python"],
    imageUrl: "avatar_6.png",
  },

  {
    name: "Amy",
    role: ["交大資工碩士與教育博士"],
    class: ["國小程式邏輯培訓與養成"],
    imageUrl: "avatar_7.png",
  },

  {
    name: "Jack",
    role: ["北美軟體公司面試官", "工程師"],
    class: ["全端網頁", "APCS", "Leetcode", "科技業面試"],
    imageUrl: "avatar_8.png",
  },

  {
    name: "Christina",
    role: ["清大電機碩士"],
    class: ["APCS", "AI課程"],
    imageUrl: "avatar_9.png",
  },
  {
    name: "Yoga",
    role: ["交大財經博士"],
    class: ["SAT", "python"],
    imageUrl: "avatar_10.png",
  },
  {
    name: "Yuzent",
    role: ["競技程式專家"],
    class: ["APCS", "競技程式比賽"],
    imageUrl: "avatar_11.png",
  },
  {
    name: "Yano",
    role: ["十年網頁工程師"],
    class: ["國小程式邏輯培訓與養成", "python", "網頁", "作品集"],
    imageUrl: "avatar_12.png",
  },
];
