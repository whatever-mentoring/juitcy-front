import { Column } from 'assets/common';
import { AnsButtonCard } from 'components/common/Card';

const AnswersContainer = () => {
  return (
    <Column gap={18} alignItems="center">
      <AnsButtonCard />
      <AnsButtonCard />
      <AnsButtonCard />
    </Column>
  );
};

export default AnswersContainer;
