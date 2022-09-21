import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";

interface Props {
  title: string;
  startPeriod: Date;
  setStartPeriod: Dispatch<SetStateAction<Date>>;
  finishPeriod: Date;
  setFinishPeriod: Dispatch<SetStateAction<Date>>;
}

const SelectDate = ({
  title,
  startPeriod,
  setStartPeriod,
  finishPeriod,
  setFinishPeriod,
}: Props) => {
  return (
    <>
      <Title>{title}</Title>
      <Wrapper>
        <DatePicker
          selected={startPeriod}
          onChange={(date: Date) => setStartPeriod(date)}
        />
        <span>to</span>
        <DatePicker
          selected={finishPeriod}
          onChange={(date: Date) => setFinishPeriod(date)}
          minDate={startPeriod}
        />
      </Wrapper>
    </>
  );
};

export default SelectDate;

const Title = styled.div`
  display: flex;
  width: 200px;
  height: 40px;
  line-height: 40px;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 18px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 600px;
  height: 40px;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;

  & > span {
    margin-right: 80px;
  }

  & > .react-datepicker-wrapper {
    display: flex;
    width: 180px;
    & > .react-datepicker__input-container {
      display: flex;
      & > input {
        display: flex;
        width: fit-content;
        font-size: 15px;
      }
    }
  }
`;
