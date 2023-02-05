import Svg from 'components/Svg/Svg';
import { useState } from 'react';
import { Answer, Layer, Question, QuestionWrapper } from './Dropdown.styled';

const Dropdown = ({ question, answer }) => {
  const [answerOpen, setAnswerOpen] = useState(false);
  return (
    <Layer>
      <QuestionWrapper onClick={() => setAnswerOpen(!answerOpen)}>
        <Question>{question}</Question>
        <Svg
          width="40"
          height="40"
          icon={answerOpen ? 'icon-dropClose' : 'icon-Open'}
        />
      </QuestionWrapper>
      {answerOpen && <Answer>{answer}</Answer>}
    </Layer>
  );
};

export default Dropdown;
