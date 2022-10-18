/**
 * 현재 날짜와 일치하는지 판별하는 Function
 * @param Date
 * @returns Boolean
 */
export const DateCheck = (date: Date) => {
  if (DateFormat(date) !== DateFormat(new Date())) {
    return true;
  } else {
    return false;
  }
};

/**
 * Date를 params로 전달하면 yyyy-mm-dd 형식으로 formating 해주는 Function
 * @param Date
 * @returns String
 */
export const DateFormat = (Date: Date) => {
  return `${Date.getFullYear()}-${Date.getMonth() + 1}-${Date.getDate()}`;
};
