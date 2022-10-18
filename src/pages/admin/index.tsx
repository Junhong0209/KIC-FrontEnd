import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import Edit from "public/image/Pencil.png";
import Trash from "public/image/Trash.png";
import { useEffect, useState } from "react";
import Button from "src/components/common/button";
import { handleGetPost } from "src/core/apis/admin/posting.api";

interface contentsType {
  id: number;
  post_type: string;
  title: string;
}

const Main = () => {
  const [contents, setContents] = useState<contentsType[]>([]);

  useEffect(() => {
    handleGetPost()
      .then((res) => {
        setContents(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <Link href="/admin/write" passHref>
        <Button text="New Post" marginLeft="auto" fontSize="14px" />
      </Link>
      <Header>
        <div id="type" className="line">
          Type
        </div>
        <div id="title" className="line">
          Title
        </div>
      </Header>
      <PostWarpper>
        {contents.length !== 0 ? (
          contents.map((content: contentsType) => {
            return (
              <PostList key={content.id}>
                <PostItem id="type">
                  {content.post_type ? content.post_type : "???"}
                </PostItem>
                <TitleWarpper>
                  <PostItem id="title" width="550px">
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
          })
        ) : (
          <ErrorMessage>게시글이 없습니다.</ErrorMessage>
        )}
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

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 10px;

  & > #type {
    width: 80px;
  }

  & > #title {
    width: 580px;
  }
`;

const PostWarpper = styled.div`
  display: flex;
  flex-direction: column;

  & > div > #type {
    width: 80px;
  }

  & > div > #title {
    width: 400px;
  }
`;

const TitleWarpper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 580px;
`;

const PostList = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 30px;
  text-align: center;
  padding: 10px 0px;
  border-radius: 4px;
  cursor: default;

  & > div > #title {
    text-align: start;
  }

  &:hover {
    background-color: #c4c4c4;
  }
`;

const PostItem = styled.div<{ width?: string }>`
  width: ${(props) => props.width};
`;

const ErrorMessage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 600;
`;
