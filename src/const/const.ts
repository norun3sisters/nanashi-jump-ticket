import { QQuestion } from "../type/QType";

export const Lottery2nd: string =
  "二次先行抽選中！（抽選受付は2022年10月15日まで！）";
export const QQuestions: QQuestion[] = [
  {
    question: "参加方法",
    detail: "どういう風に参加したい？",
    answers: [
      {
        answer: "会場で参加（配信アーカイブもみたい！）",
        code: "kaijo/stream",
        enabled: true,
      },
      {
        answer: "会場で参加（配信アーカイブはいらない）",
        code: "kaijo",
        enabled: true,
      },
      { answer: "配信で参加", code: "stream", enabled: true },
    ],
  },
  {
    question: "公演",
    detail: "どの公演を見たい？",
    answers: [
      { answer: "昼の部", code: "daytime", enabled: true },
      { answer: "夜の部", code: "night", enabled: true },
      { answer: "両方！", code: "all", enabled: true },
    ],
  },
  {
    question: "座席",
    detail: "座席はどこがいい？",
    answers: [
      { answer: "Ｓ席（１階＝アリーナ）", code: "S", enabled: true },
      { answer: "Ａ席（２階）", code: "A", enabled: true },
    ],
  },
  {
    question: "グッズ",
    detail: "グッズ付きは10月15日（土）まで！",
    answers: [
      {
        answer: "もちろん欲しい！（グッズ付き）",
        code: "goods",
        enabled: true,
      },
      {
        answer: "遠慮します（グッズ付かない）",
        code: "nogoods",
        enabled: true,
      },
    ],
  },
];
