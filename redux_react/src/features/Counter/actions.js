import { DEC_COUNT, INC_COUNT } from "./actionTypes";

export const incCount = (data) => {
  return { type: INC_COUNT, payload: data };
};

export const decCount = (data) => {
  return { type: DEC_COUNT, payload: data };
};
