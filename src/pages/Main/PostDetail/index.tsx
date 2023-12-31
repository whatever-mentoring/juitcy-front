import { Column, EntireContainer, Row } from 'assets/common';
import { Header } from 'components/common/Header';
import CardSlider, { MakeCardSlider } from 'components/common/CardSlider';
import { Palette } from 'styles/Palette';
import { useParams } from 'react-router';
import CommentScrapInfo from 'components/PostDetail/CommentScrapInfo';
import ScrapButton from 'components/PostDetail/ScrapButton';
import CommentsBox from 'components/PostDetail/CommentsBox';
import CommentInputBox from 'components/PostDetail/CommentInputBox';
import { useEffect, useState } from 'react';
import { postsDetailApi } from 'network/apis/postsApi';
import { postType, commentType } from 'types';

const PostDetail = () => {
  const { idx } = useParams();
  const idxNum = idx ? parseInt(idx) : null;
  const [postdetail, setPostdetail] = useState<postType | null>(null);
  const [isScrap, setIsScrap] = useState<boolean | undefined>(); //스크랩 버튼을 누를 경우 api를 다시 호출한다.

  const fetchData = async () => {
    try {
      if (idxNum !== null) {
        const res = await postsDetailApi(idxNum);
        setPostdetail(res);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    setIsScrap(postdetail?.isScrap);
  }, [idxNum]);
  useEffect(() => {
    fetchData();
  }, [isScrap]);
  return (
    <Column>
      <Header btn={'back'} borderBottom={true}>
        {' '}
      </Header>
      <EntireContainer color={Palette.Gray05} background={Palette.Gray05}>
        {postdetail !== null && (
          <Column gap={23}>
            <CardSlider cards={MakeCardSlider(postdetail)} />
            <Row justifyContent="space-between">
              <CommentScrapInfo post={postdetail}></CommentScrapInfo>
              {idxNum && (
                <ScrapButton
                  postIdx={idxNum}
                  post={postdetail}
                  setIsScrap={setIsScrap}
                ></ScrapButton>
              )}
            </Row>
            {postdetail.commentList !== undefined && (
              <CommentsBox comments={postdetail.commentList}></CommentsBox>
            )}
          </Column>
        )}
      </EntireContainer>

      {idxNum && <CommentInputBox idx={idxNum} />}
    </Column>
  );
};

export default PostDetail;
