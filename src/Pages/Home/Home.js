import { MenuItem, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Categories from '../../shared/Data/Categories';
import './Home.css';

const Home = ({ fetchQuestions }) => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push('/quiz');
    }
  };

  return (
    <div className='content'>
      <div className='settings'>
        <div className='settings__select'>
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField
            select
            label='Select Category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant='outlined'
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          {/* <select
            class='form-select'
            select
            label='Select Category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant='outlined'
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <option key={cat.category} value={cat.value}>
                {cat.category}
              </option>
            ))}
          </select> */}
          <TextField
            select
            label='Select Difficulty'
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant='outlined'
            style={{ marginBottom: 30 }}
          >
            <MenuItem key='Easy' value='easy'>
              Easy
            </MenuItem>
            <MenuItem key='Medium' value='medium'>
              Medium
            </MenuItem>
            <MenuItem key='Hard' value='hard'>
              Hard
            </MenuItem>
          </TextField>
          <button className='btn btn-primary' onClick={handleSubmit}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
