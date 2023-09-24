import { Column, EntireContainer } from 'assets/common';
import Notice from 'components/Answer/Notice';
import { Header } from 'components/common/Header';
import Homebar from 'components/common/Homebar';
import CategoryBar from 'components/Category/CategoryBar';
import { useEffect, useState } from 'react';
import { questionType } from 'types';
import { useInView } from 'react-intersection-observer';
import { getQuestionApi } from 'network/apis/question';
import { AnsButtonCard } from 'components/common/Card';
import { Palette } from 'styles/Palette';

const Answer = () => {
  const [selectedCtg, setSelectedCtg] = useState<string>('');
  const [questions, setQuestions] = useState<questionType[]>();
  const { ref, inView } = useInView();
  const [page, setPage] = useState(0);

  const fetchNewQs = async () => {
    try {
      let res = await getQuestionApi({ category: selectedCtg, page });
      const newQuestions: questionType[] = res?.result?.content;
      if (questions !== undefined) {
        setQuestions([...questions, ...newQuestions]);
      }
      setPage(page + 1);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchQs = async () => {
      try {
        const page = 0;
        let res = await getQuestionApi({
          category: selectedCtg,
          page,
        });
        const newQuestions: questionType[] = res?.result?.content;
        setQuestions(newQuestions);
        setPage(page + 1);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQs();
  }, [selectedCtg]);

  useEffect(() => {
    if (inView) fetchNewQs();
  }, [inView]);

  return (
    <Column>
      <Header borderBottom={true}>답변하기</Header>
      <EntireContainer homebar={true} background={Palette.Gray05}>
        <div style={{ padding: '10px 0' }}>
          <Notice />
          <CategoryBar.container>
            <CategoryBar.ctgs ctgAll={true} setSelectedCtg={setSelectedCtg} />
          </CategoryBar.container>
        </div>
        <Column gap={18} alignItems="center">
          {questions?.map((question, index) => {
            return (
              <AnsButtonCard
                key={question.postIdx}
                question={question}
                ref={index === questions.length - 1 ? ref : undefined}
              ></AnsButtonCard>
            );
          })}
        </Column>
      </EntireContainer>
      <Homebar />
    </Column>
  );
};

export default Answer;
