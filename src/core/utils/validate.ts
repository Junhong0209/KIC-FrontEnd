interface errorType {
  title?: string;
  contents?: string;
  link?: string;
}

const postValidate = ({ title, contents, link }: errorType) => {
  const errors: errorType = {};

  if (!title) {
    errors.title = "제목이 입력되지 않았습니다.";
  } else if (title === " ") {
    errors.title = "제목에 공백만 입력할 수 없습니다.";
  }

  if (!contents) {
    errors.contents = "게시글이 작성되지 않았습니다.";
  } else if (contents === " ") {
    errors.contents = "게시글에 공백만 입력할 수 없습니다.";
  }

  if (!link) {
    errors.link = "링크가 입력되지 않았습니다.";
  } else if (link === " ") {
    errors.link = "링크에 공백만 입력할 수 없습니다.";
  }

  return errors;
};

export default postValidate;
