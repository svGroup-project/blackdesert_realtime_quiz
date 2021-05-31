import { atom } from "recoil";

export const quizStatus = atom({
  key: "quizStatus",
  default: {},
});

export const tabIdState = atom({
  key: "tabIdState",
  default: 0,
});

export const statusState = atom({
  key: "statusState",
  default: "대기",
});

export const quizNumberState = atom({
  key: "quizNumberState",
  default: 1,
});

export const nextStepState = atom({
  key: "nextStepState",
  default: 0,
});

export const userAnswerState = atom({
  key: "userAnswerState",
  default: {},
});

export const introDataState = atom({
  key: "introDataState",
  default: {},
});
