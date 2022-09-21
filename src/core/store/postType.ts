export interface ButtonType {
  id: number;
  text: string;
  marginRight?: string;
  height: string;
}

export const ButtonData: ButtonType[] = [
  {
    id: 1,
    text: "Program",
    marginRight: "30px",
    height: "40px",
  },
  {
    id: 2,
    text: "Event",
    marginRight: "30px",
    height: "40px",
  },
  {
    id: 3,
    text: "News",
    height: "40px",
  },
];
