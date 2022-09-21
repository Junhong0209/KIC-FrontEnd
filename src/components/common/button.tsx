import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

interface Props {
  width?: string;
  height?: string;
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  hoverBackgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  width,
  height,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  borderRadius,
  backgroundColor,
  hoverBackgroundColor,
  fontSize,
  fontWeight,
  fontFamily,
  text,
  onClick,
}: Props) => {
  const lineHeight =
    Number(height?.split("px")[0] ? height.split("px")[0] : 40) -
    Number(padding?.split("px")[0] ? padding.split("px")[0] : 7);

  return (
    <CustomButton
      style={{
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        backgroundColor,
        fontSize,
        fontWeight,
        fontFamily,
        lineHeight: String(lineHeight - 10 + "px"),
      }}
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      hoverBackgroundColor={hoverBackgroundColor}
      onClick={onClick}
    >
      {text}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button<{
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  hoverBackgroundColor?: string;
}>`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "fit-content")};
  height: ${(props) => (props.height ? props.height : "40px")};
  padding: ${(props) => (props.padding ? props.padding : "8px")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "4px"};

  &:hover {
    background-color: ${(props) =>
      props.hoverBackgroundColor ? props.hoverBackgroundColor : "#C4C4C4"};
  }
`;
