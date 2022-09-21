import styled from "@emotion/styled";
import { ChangeEventHandler } from "react";

interface Props {
  width?: string;
  height?: string;
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  border?: string;
  focusBorder?: string;
  borderRadius?: string;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({
  width,
  height,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  fontSize,
  fontWeight,
  fontFamily,
  border,
  focusBorder,
  borderRadius,
  name,
  value,
  onChange,
}: Props) => {
  return (
    <CustomTextArea
      style={{
        width,
        height,
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        padding,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        fontSize,
        fontWeight,
        fontFamily,
      }}
      name={name}
      value={value}
      onChange={onChange}
      border={border}
      focusBorder={focusBorder}
      borderRadius={borderRadius}
    />
  );
};

export default TextArea;

const CustomTextArea = styled.textarea<{
  border?: string;
  focusBorder?: string;
  borderRadius?: string;
}>`
  display: flex;
  resize: none;
  border: ${(props) => props.border && props.border};
  border-radius: ${(props) => props.borderRadius && props.borderRadius};

  &:focus {
    border: ${(props) => props.focusBorder && props.focusBorder};
  }
`;
