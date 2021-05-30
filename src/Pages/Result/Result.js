import { useLocation } from 'react-router';

const Result = (props) => {
  const location = useLocation();
  const { score } = props;
  const { answers } = location.state;
  console.log(location.state);
  return (
    <div className='container mt-3'>
      <span className='h3'>Your Score : {score}</span>
      {answers?.map((answer) => (
        <div className='card my-2'>
          <div className='card-body'>
            <h5 className='card-title'>{answer.question}</h5>
            <p>Your answer: {answer.yourAnswer}</p>
            <p>Correct answer: {answer.correctAnswer}</p>
            <p>Tries: {answer.noOfTries}</p>
          </div>
        </div>
      ))}

      <a className='btn btn-primary' href='/'>
        Go to homepage
      </a>
    </div>
  );
};

export default Result;
