import { useEffect, useState } from "react";

const FileInput = ({
  thumbnailFileName,
  handleChangeImageFile,
}: {
  thumbnailFileName: string;
  handleChangeImageFile: (event: any) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    if (thumbnailFileName === "") {
      setInputValue("첨부파일");
    } else {
      setInputValue(thumbnailFileName);
    }
  }, [thumbnailFileName]);
  return (
    <div className="filebox">
      <input className="upload-name" value={inputValue} disabled />
      <label htmlFor="ex_filename">업로드</label>
      <input
        id="ex_filename"
        className="upload-hidden"
        type="file"
        accept="image/*"
        onChange={handleChangeImageFile}
      />
    </div>
  );
};

export default FileInput;
