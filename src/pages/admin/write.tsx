import "react-datepicker/dist/react-datepicker.css";
import styled from "@emotion/styled";
import { useState } from "react";
import Button from "src/components/common/button";
import Input from "src/components/common/input";
import TextArea from "src/components/common/textArea";
import { ButtonData, ButtonType } from "src/core/store/postType";
import useForm from "src/core/hooks/useForm";
import postValidate from "src/core/utils/validate";
import SelectDate from "src/components/selectDate";
import { Theme, useTheme } from "@emotion/react";
import { useRecoilState } from "recoil";
import addActiveClass from "src/core/utils/addActiveClass";
import FileInput from "src/components/common/fileInput";
import { DateCheck, DateFormat } from "src/core/utils/dateFunc";
import { CustomToast } from "src/core/lib/CustomToast";
import { handleAddNewPost } from "src/core/apis/admin/posting.api";
import { NextRouter, useRouter } from "next/router";

const Write = () => {
  const theme: Theme = useTheme();
  const router: NextRouter = useRouter();

  const [startOperatingPeriod, setStartOperatingPeriod] = useState<Date>(
    new Date()
  );
  const [finishOperatingPeriod, setFinishOperatingPeriod] = useState<Date>(
    new Date()
  );
  const [startApplyPeriod, setStartApplyPeriod] = useState<Date>(new Date());
  const [finishApplyPeriod, setFinishApplyPeriod] = useState<Date>(new Date());
  const [thumbnailImageFile, setThumbnailImageFile] = useState<any>();
  const [thumbnailFileName, setThumbnailFileName] = useState<string>("");
  const [postType, setPostType] = useState<string>("");
  const [buttonDatas, setButtonDatas] = useRecoilState(ButtonData);

  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initValue: {
      title: "",
      contents: "",
      link: "",
    },
    onSubmit: (values: any) => {
      if (DateCheck(finishOperatingPeriod) && DateCheck(finishApplyPeriod)) {
        const data = new FormData();
        data.append("post_type", postType);
        data.append("start_operating_period", DateFormat(startOperatingPeriod));
        data.append(
          "finish_operating_period",
          DateFormat(finishOperatingPeriod)
        );
        data.append("start_apply_period", DateFormat(startApplyPeriod));
        data.append("finish_apply_period", DateFormat(finishApplyPeriod));
        data.append("title", values.title);
        data.append("content", values.contents);
        data.append("link", values.link);
        data.append("thumbnail", thumbnailImageFile);
        data.append("disabled", "false");
        handleAddNewPost(data)
          .then((res) => {
            router.push("/admin");
            CustomToast(res.detail, theme.colors.ToastSuccess);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        CustomToast(
          "마감기간이 오늘 날짜와 겹치지 않도록 다시 설정해주세요!",
          theme.colors.ToastError
        );
      }
    },
    validate: postValidate,
  });

  const handleChangeImageFile = (event: any) => {
    const Files = event.target.files[0];
    setThumbnailImageFile(Files);
    setThumbnailFileName(Files.name);
  };

  return (
    <Container>
      <Wrapper>
        <Item>Post Type</Item>
        <ButtonWrapper>
          {buttonDatas.map((data: ButtonType) => {
            return (
              <Button
                key={data.id}
                text={data.text}
                marginRight={data.marginRight}
                height={data.height}
                backgroundColor={
                  data.active ? theme.colors.BGray70 : "transparent"
                }
                onClick={() => {
                  setPostType(data.text);
                  addActiveClass(buttonDatas, setButtonDatas, data.id);
                }}
              />
            );
          })}
        </ButtonWrapper>
      </Wrapper>
      <Wrapper>
        <Item>Title</Item>
        <Input
          width="600px"
          height="40px"
          padding="0px 0px 0px 5px"
          borderRadius="4px"
          border="1px solid #000000"
          focusBorder="1px solid #F2F"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
      </Wrapper>
      <Wrapper>
        <SelectDate
          title="Operating Period"
          startPeriod={startOperatingPeriod}
          setStartPeriod={setStartOperatingPeriod}
          finishPeriod={finishOperatingPeriod}
          setFinishPeriod={setFinishOperatingPeriod}
        />
      </Wrapper>
      <Wrapper>
        <SelectDate
          title="Apply Period"
          startPeriod={startApplyPeriod}
          setStartPeriod={setStartApplyPeriod}
          finishPeriod={finishApplyPeriod}
          setFinishPeriod={setFinishApplyPeriod}
        />
      </Wrapper>
      <Wrapper>
        <Item>Contents</Item>
        <TextArea
          width="600px"
          height="80px"
          padding="5px 0px 0px 5px"
          borderRadius="4px"
          border="1px solid #000000"
          focusBorder="1px solid #F2F"
          name="contents"
          value={values.contents}
          onChange={handleChange}
        />
      </Wrapper>
      <Wrapper>
        <Item>Thumbnail</Item>
        <FileInput
          thumbnailFileName={thumbnailFileName}
          handleChangeImageFile={handleChangeImageFile}
        />
      </Wrapper>
      <Wrapper>
        <Item>Link</Item>
        <Input
          width="600px"
          height="40px"
          padding="0px 0px 0px 5px"
          borderRadius="4px"
          border="1px solid #000000"
          focusBorder="1px solid #F2F"
          name="link"
          value={values.link}
          onChange={handleChange}
        />
      </Wrapper>
      <Button
        width="200px"
        text="Apply"
        marginTop="30px"
        fontSize="16px"
        onClick={handleSubmit}
      />
    </Container>
  );
};

export default Write;

const Container = styled.div`
  display: flex;
  width: 900px;
  margin: auto;
  padding-top: 100px;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 600px;
`;

const Item = styled.div`
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
  width: 100%;
  height: fit-content;
  line-height: 40px;
  margin-bottom: 30px;
  justify-content: space-between;
`;
