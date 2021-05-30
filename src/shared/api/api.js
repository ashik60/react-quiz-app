import axios from 'axios';

export const fetchQuestions = async (category = '', difficulty = '') => {
  const { data } = await axios.get(
    `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${
      difficulty && `&difficulty=${difficulty}`
    }&type=multiple`
  );

  return data;
};
