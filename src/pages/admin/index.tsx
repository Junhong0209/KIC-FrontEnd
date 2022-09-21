import styled from "@emotion/styled";
import Image from "next/image";
import Edit from "public/image/Pencil.png";
import Trash from "public/image/Trash.png";
import Button from "src/components/common/button";

interface type {
  id: number;
  type: string;
  title: string;
}

const Main = () => {
  const Content: type[] = [
    { id: 1, type: "program", title: "Hello" },
    { id: 2, type: "event", title: "hi" },
    { id: 3, type: "news", title: "test" },
  ];
  return (
    <Container>
      <Button
        text="New Post"
        marginLeft="auto"
        fontSize="14px"
        onClick={() => alert("this button is new post button.")}
      />
      <Header>
        <div id="type" className="line">
          Type
        </div>
        <div id="title" className="line">
          Title
        </div>
      </Header>
      <PostWarpper>
        {Content.map((content: type) => {
          return (
            <PostList key={content.id}>
              <PostItem id="type" width="50px">
                {content.id}
              </PostItem>
              <TitleWarpper>
                <PostItem id="title" width="500px">
                  {content.title}
                </PostItem>
                <Image
                  src={Edit}
                  width={30}
                  height={30}
                  alt="edit image"
                  style={{ cursor: "pointer" }}
                />
                <Image
                  src={Trash}
                  width={30}
                  height={30}
                  alt="trash image"
                  style={{ cursor: "pointer" }}
                />
              </TitleWarpper>
            </PostList>
          );
        })}
      </PostWarpper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  width: 700px;
  padding-top: 200px;
  margin: auto;
  font-family: Pretendard;
  flex-direction: column;

  & > div > .line {
    border-bottom: 1px solid #79b8ff;
  }
`;

const NewPostButton = styled.div`
  display: flex;
  margin-left: auto;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 20px;

  & > #type {
    width: 50px;
  }

  & > #title {
    width: 600px;
  }
`;

const PostWarpper = styled.div`
  display: flex;
  flex-direction: column;

  & > div > #type {
    width: 50px;
  }

  & > div > #title {
    width: 450px;
  }
`;

const TitleWarpper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

const PostList = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: center;

  & > div > #title {
    text-align: start;
  }
`;

const PostItem = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`;
