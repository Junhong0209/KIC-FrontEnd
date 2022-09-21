import styled from "@emotion/styled";
import { ChangeEventHandler } from "react";

interface Props {
  width?: string;
  height?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  margin?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  padding?: string;
  placeholder?: string;
  
  border?: string;
  focusBorder?: string;
  borderRadius?: string;
  type?: string;
  accept?: string;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  width,
  height,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  margin,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  padding,
  placeholder,
  border,
  focusBorder,
  borderRadius,
  type,
  accept,
  name,
  value,
  onChange,
}: Props) => {
  return (
    <CustomInput
      style={{
        width,
        height,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        margin,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        padding,
        lineHeight: height,
      }}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      border={border}
      borderRadius={borderRadius}
      focusBorder={focusBorder}
      type={type}
      accept={accept}
    />
  );
};

export default Input;

const CustomInput = styled.input<{
  border?: string;
  focusBorder?: string;
  borderRadius?: string;
}>`
  font-family: Pretendard;
  border-radius: ${(props) => props.borderRadius && props.borderRadius};
  border: ${(props) => props.border && props.border};

  &:focus {
    border: ${(props) => props.focusBorder && props.focusBorder};
  }
`;
