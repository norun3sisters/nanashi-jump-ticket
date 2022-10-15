export type QPageProps = {
  title: string;
  answers: QAnswer[];
};

export type QState = {
  current: number;
  place: string;
  times: string;
  seat: string;
  goods: string;
};

export type QQuestion = {
  question: string;
  detail: string;
  answers: QAnswer[];
};

export type QAnswer = {
  answer: string;
  code: string;
  enabled: boolean;
};

export type TicketData = {
  name: string;
  status: string;
  cost: string;
  ticketPage: string;
  enabled: boolean;
};
