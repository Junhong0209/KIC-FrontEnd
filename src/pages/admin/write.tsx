import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "src/components/common/button";
import Input from "src/components/common/input";
import TextArea from "src/components/common/textArea";
import { ButtonData, ButtonType } from "src/core/store/postType";
import useForm from "src/core/hooks/useForm";
import postValidate from "src/core/utils/validate";
import SelectDate from "src/components/selectDate";

import "react-datepicker/dist/react-datepicker.css";

const Write = () => {
  const [startOperatingPeriod, setStartOperatingPeriod] = useState<Date>(
    new Date()
  );
  const [finishOperatingPeriod, setFinishOperatingPeriod] = useState<Date>(
    new Date()
  );
  const [startApplyPeriod, setStartApplyPeriod] = useState<Date>(new Date());
  const [finishApplyPeriod, setFinishApplyPeriod] = useState<Date>(new Date());
  const [thumbnailImageFile, setThumbnailImageFile] = useState();

  const [postType, setPostType] = useState<string>("");
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initValue: {
      title: "",
      contents: "",
      link: "",
    },
    onSubmit: (values) => {
      console.log(values);
      console.log(`
        startOperatingPeriod: ${startOperatingPeriod.getFullYear()}/${
        startOperatingPeriod.getMonth() + 1
      }/${startOperatingPeriod.getDate()}, finishOperatingPeriod: ${finishOperatingPeriod}
        startApplyPeriod: ${startApplyPeriod}, finishApply: ${finishApplyPeriod}
      `);
      console.log(postType);
    },
    validate: postValidate,
  });

  const handleChangeImageFile = (event: any) => {
    console.log(event.target.files);
    setThumbnailImageFile(event.target.files);
  };

  useEffect(() => {
    console.log(thumbnailImageFile);
  }, [thumbnailImageFile]);

  return (
    <Container>
      <Wrapper>
        <Item>Post Type</Item>
        <ButtonWrapper>
          {ButtonData.map((data: ButtonType) => {
            return (
              <Button
                key={data.id}
                text={data.text}
                marginRight={data.marginRight}
                height={data.height}
                onClick={() => setPostType(data.text)}
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
          value={values.content}
          onChange={handleChange}
        />
      </Wrapper>
      <Wrapper>
        <Item>Thumbnail</Item>
        <Input
          width="600px"
          height="40px"
          type="file"
          accept="image/*"
          onChange={handleChangeImageFile}
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
        margin="auto"
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
