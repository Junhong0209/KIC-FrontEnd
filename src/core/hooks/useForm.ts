import { Theme, useTheme } from "@emotion/react";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { CustomToast } from "../lib/CustomToast";
import postValidate from "../utils/validate";

interface useFormProps {
  initValue: object;
  onSubmit: (values: object) => void;
  validate: typeof postValidate;
}

interface postValidateProps {
  title?: string;
  content?: string;
  link?: string;
}

/**
 * form 태그를 편하게 사용 할 수 있는 CustomHook
 * @returns values, errors, isLoading, handleChange, handleSubmit
 */
const useForm = ({ initValue, onSubmit, validate }: useFormProps) => {
  const theme: Theme = useTheme();
  const [values, setValues] = useState<postValidateProps>(initValue);
  const [errors, setErrors] = useState<postValidateProps>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * 데이터를 입력하면 하나의 오브젝트에 입력하고 변경 해주는 함수
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  /**
   * submit을 했을 때 오류가 있는지 validation하는 함수
   */
  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    console.log(values);
    setErrors(validate(values));
  };

  useEffect(() => {
    if (isLoading) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
        console.log("hi");
      } else {
        console.log(errors);
        CustomToast(
          "값을 입력하지 않은 곳이 있습니다. 값을 입력 후 작성해주세요.",
          theme.colors.ToastError
        );
      }
      setIsLoading(false);
    }
  }, [errors]);

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
