export interface ButtonType {
  id: number;
  active: boolean;
  text: string;
  marginRight?: string;
  height: string;
}

import { atom } from "recoil";

export const ButtonData = atom<ButtonType[]>({
  key: "ButtonType",
  default: [
    {
      id: 1,
      active: true,
      text: "Program",
      marginRight: "30px",
      height: "40px",
    },
    {
      id: 2,
      active: false,
      text: "Event",
      marginRight: "30px",
      height: "40px",
    },
    {
      id: 3,
      active: false,
      text: "News",
      height: "40px",
    },
  ],
});
