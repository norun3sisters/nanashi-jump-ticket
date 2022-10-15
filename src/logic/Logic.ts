import { Lottery2nd, QQuestions } from "../const/const";
import { QState, TicketData } from "../type/QType";

export const setState = (qstate: QState, value: string) => {
  const copyState = { ...qstate };

  switch (copyState.current) {
    case 0:
      copyState.place = value;
      break;
    case 1:
      copyState.times = value;
      break;
    case 2:
      copyState.seat = value;
      break;
    case 3:
      copyState.goods = value;
      break;
  }

  return copyState;
};

export const GetQuestion = (qstate: QState) => {
  const qquestion = QQuestions[qstate.current];

  const enabledAnswers = qquestion.answers.map((answer) => {
    const testState = setState(qstate, answer.code);
    const ticket = GetTicketData(testState);
    answer.enabled = ticket.enabled;
    return answer;
  });

  qquestion.answers = [...enabledAnswers];

  return qquestion;
};

export const GetTicketData = (qstate: QState) => {
  const ticketData: TicketData = {
    name: "",
    status: "",
    cost: "",
    ticketPage: "",
    enabled: true,
  };

  if (
    qstate.place === "kaijo/stream" &&
    qstate.times === "all" &&
    qstate.seat === "S"
  ) {
    ticketData.enabled = false;

    if (qstate.goods === "goods") {
      ticketData.name =
        "会場チケットS席＜昼＆夜＞豪華グッズセット＋アーカイブ配信付";
      ticketData.status = "販売終了";
      ticketData.cost = "39,800円";
      ticketData.ticketPage = "";
    } else if (qstate.goods === "nogoods") {
      ticketData.name = "";
      ticketData.status = "なし";
      ticketData.cost = "";
      ticketData.ticketPage = "";
    }
  } else if (
    qstate.place === "kaijo/stream" &&
    qstate.times === "all" &&
    qstate.seat === "A" &&
    qstate.goods === "goods"
  ) {
    ticketData.name =
      "会場チケットA席<昼・夜>豪華グッズセット＋アーカイブ配信付";
    ticketData.status = Lottery2nd;
    ticketData.cost = "36,800円";
    ticketData.ticketPage =
      "https://virtual.spwn.jp/events/221203-774fes-a1/ticket";
    ticketData.enabled = true;
  } else if (
    qstate.place === "kaijo/stream" &&
    qstate.times === "all" &&
    qstate.seat === "A" &&
    qstate.goods === "nogoods"
  ) {
    ticketData.name = "";
    ticketData.status = "なし";
    ticketData.cost = "";
    ticketData.ticketPage = "";
    ticketData.enabled = false;
  } else if (qstate.place === "kaijo/stream" && qstate.times === "daytime") {
    ticketData.name = "";
    ticketData.status = "なし";
    ticketData.cost = "";
    ticketData.ticketPage = "";
    ticketData.enabled = false;
  } else if (qstate.place === "kaijo/stream" && qstate.times === "night") {
    ticketData.name = "";
    ticketData.status = "なし";
    ticketData.cost = "";
    ticketData.ticketPage = "";
    ticketData.enabled = false;
  } else if (
    qstate.place === "kaijo" &&
    qstate.times === "all" &&
    qstate.seat === "S"
  ) {
    ticketData.enabled = false;
    if (qstate.goods === "goods") {
      ticketData.name = "会場チケットS席＜昼＆夜＞豪華グッズセット付";
      ticketData.status = "販売終了";
      ticketData.cost = "29,800円";
      ticketData.ticketPage = "";
    } else if (qstate.goods === "nogoods") {
      ticketData.name = "";
      ticketData.status = "なし";
      ticketData.cost = "";
      ticketData.ticketPage = "";
    }
  } else if (
    qstate.place === "kaijo" &&
    qstate.times === "all" &&
    qstate.seat === "A" &&
    qstate.goods === "goods"
  ) {
    ticketData.name = "会場チケットA席<昼・夜>豪華グッズセット付";
    ticketData.status = Lottery2nd;
    ticketData.cost = "26,800円";
    ticketData.ticketPage =
      "https://virtual.spwn.jp/events/221203-774fes-a2/ticket";
    ticketData.enabled = true;
  } else if (
    qstate.place === "kaijo" &&
    qstate.times === "all" &&
    qstate.seat === "A" &&
    qstate.goods === "nogoods"
  ) {
    ticketData.name = "";
    ticketData.status = "なし";
    ticketData.cost = "";
    ticketData.ticketPage = "";
    ticketData.enabled = false;
  } else if (qstate.place === "kaijo" && qstate.times === "daytime") {
    ticketData.enabled = true;

    if (qstate.seat === "S" && qstate.goods === "goods") {
      ticketData.name = "会場チケットS席＜昼の部＞豪華グッズセット付";
      ticketData.status = Lottery2nd;
      ticketData.cost = "22,800円";
      ticketData.ticketPage =
        "https://virtual.spwn.jp/events/221203-774fes-s2/ticket";
    } else if (qstate.seat === "S" && qstate.goods === "nogoods") {
      ticketData.name = "会場チケットS席＜昼の部＞";
      ticketData.status = Lottery2nd;
      ticketData.cost = "12,000円";
      ticketData.ticketPage =
        "https://virtual.spwn.jp/events/221203-774fes-s3/ticket";
    } else if (qstate.seat === "A" && qstate.goods === "goods") {
      ticketData.name = "会場チケットA席＜昼の部＞豪華グッズセット付";
      ticketData.status = Lottery2nd;
      ticketData.cost = "19,500円";
      ticketData.ticketPage =
        "https://virtual.spwn.jp/events/221203-774fes-a2/ticket";
    } else if (qstate.seat === "A" && qstate.goods === "nogoods") {
      ticketData.name = "会場チケットA席＜昼の部＞";
      ticketData.status = Lottery2nd;
      ticketData.cost = "8,700円";
      ticketData.ticketPage =
        "https://virtual.spwn.jp/events/221203-774fes-a3/ticket";
    }
  } else if (qstate.place === "kaijo" && qstate.times === "night") {
    ticketData.enabled = true;
    if (qstate.seat === "S" && qstate.goods === "goods") {
      ticketData.name = "会場チケットS席＜夜の部＞豪華グッズセット付";
      ticketData.status = Lottery2nd;
      ticketData.cost = "22,800円";
      ticketData.ticketPage =
        "https://virtual.spwn.jp/events/221203-774fes-s2/ticket";
    } else if (qstate.seat === "S" && qstate.goods === "nogoods") {
      ticketData.name = "会場チケットS席＜夜の部＞";
      ticketData.status = Lottery2nd;
      ticketData.cost = "12,000円";
      ticketData.ticketPage =
        "https://virtual.spwn.jp/events/221203-774fes-s3/ticket";
    } else if (qstate.seat === "A" && qstate.goods === "goods") {
      ticketData.name = "会場チケットA席＜夜の部＞豪華グッズセット付";
      ticketData.status = Lottery2nd;
      ticketData.cost = "19,500円";
      ticketData.ticketPage =
        "https://virtual.spwn.jp/events/221203-774fes-a2/ticket";
    } else if (qstate.seat === "A" && qstate.goods === "nogoods") {
      ticketData.name = "会場チケットA席＜夜の部＞";
      ticketData.status = Lottery2nd;
      ticketData.cost = "8,700円";
      ticketData.ticketPage =
        "https://virtual.spwn.jp/events/221203-774fes-a3/ticket";
    }
  } else if (
    qstate.place === "stream" &&
    qstate.times === "all" &&
    qstate.goods === "goods"
  ) {
    ticketData.name = "配信チケット＜昼・夜＞【事前お届け】豪華グッズセット付";
    ticketData.status = "販売中！";
    ticketData.cost = "25,300円";
    ticketData.ticketPage = "https://spwn.jp/events/221203-774fes-lv/ticket";
    ticketData.enabled = true;
  } else if (
    qstate.place === "stream" &&
    qstate.times === "all" &&
    qstate.goods === "nogoods"
  ) {
    ticketData.name = "";
    ticketData.status = "なし";
    ticketData.cost = "";
    ticketData.ticketPage = "";
    ticketData.enabled = false;
  } else if (qstate.place === "stream" && qstate.times === "daytime") {
    ticketData.name = "";
    ticketData.status = "なし";
    ticketData.cost = "";
    ticketData.ticketPage = "";
    ticketData.enabled = false;
  } else if (qstate.place === "stream" && qstate.times === "night") {
    ticketData.name = "";
    ticketData.status = "なし";
    ticketData.cost = "";
    ticketData.ticketPage = "";
    ticketData.enabled = false;
  }

  return ticketData;
};

export const zenkaku2Hankaku = (str: string) => {
  return str.replace(/[A-Za-z0-9]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
  });
};
