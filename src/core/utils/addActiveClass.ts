import { SetterOrUpdater } from "recoil";
import { ButtonType } from "../store/postType";

const addActiveClass = (
  buttonData: ButtonType[],
  setButtonData: SetterOrUpdater<ButtonType[]>,
  index: number
) => {
  let copyData: ButtonType[] = [...buttonData].sort();
  for (let i = 0; i < copyData.length; i += 1) {
    copyData[i] = { ...copyData[i], active: false };
  }
  copyData[index - 1] = { ...copyData[index - 1], active: true };
  setButtonData(copyData);
};

export default addActiveClass;
