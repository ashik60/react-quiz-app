import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { fetchQuestions } from './shared/api/api';

function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const getQuestions = async (category = '', difficulty = '') => {
    // const { data } = await axios.get(
    //   `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${
    //     difficulty && `&difficulty=${difficulty}`
    //   }&type=multiple`
    // );
    const data = await fetchQuestions(category, difficulty);
    setQuestions(data.results);

    // setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/quiz'>
            <Quiz
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path='/result'>
            <Result score={score} />
          </Route>
          <Route path='/' exact>
            <Home fetchQuestions={getQuestions} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
