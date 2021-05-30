import { useState } from 'react';
import { useHistory } from 'react-router';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Question.css';

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [tries, setTries] = useState(1);
  const [answers, setAnswers] = useState([]);

  const [answer, setAnswer] = useState({
    question: '',
    correctAnswer: '',
    yourAnswer: '',
    noOfTries: 1,
  });

  const history = useHistory();

  const handleSelect = (option) => {
    if (selected === option && selected === correct) return 'select';
    else if (selected === option && selected !== correct) return 'wrong';
    // else if (option === correct) return 'select';
  };

  const handleCheck = (option) => {
    setTries(tries + 1);
    console.log(tries);
    setSelected(option);
    if (option === correct) setScore(score + 1);
    setError(false);
    setAnswer({
      question: questions[currQues].question,
      correctAnswer: correct,
      yourAnswer: option,
      noOfTries: tries,
    });
  };

  const handleNext = () => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    setTries(1);

    if (currQues > 8) {
      console.log(answers);
      console.log('pushed');
      history.push({ pathname: '/result', state: { answers } });
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError('Please select an option first');
  };

  const handleReset = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className='question'>
      <h1>Question {currQues + 1} :</h1>

      <div className='singleQuestion'>
        <h2>{questions[currQues].question}</h2>
        <div className='options'>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((option) => (
              <button
                className={`singleOption btn ${selected && handleSelect(option)}`}
                key={option}
                onClick={() => handleCheck(option)}
                disabled={tries > 2 || correct === selected}
              >
                {option}
              </button>
            ))}
        </div>

        <div className='controls'>
          <button className='btn btn-danger' href='/' onClick={() => handleReset()}>
            Reset
          </button>
          <button className='btn btn-primary' onClick={handleNext}>
            {currQues > 8 ? 'Submit' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
