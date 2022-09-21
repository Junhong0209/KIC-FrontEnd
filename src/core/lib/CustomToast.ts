import toast from "react-hot-toast";

export const CustomToast = (message: string, backgroundColor: string) => {
  toast(message, {
    style: {
      borderRadius: "8px",
      maxWidth: "516px",
      height: "43px",
      fontSize: "16px",
      fontFamily: "Pretendard",
      fontWeight: "400",
      background: backgroundColor,
      color: "#FFFFFF",
    },
  });
};
