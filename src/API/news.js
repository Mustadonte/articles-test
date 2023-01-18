import axios from 'axios';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/';

export const fetchNews = async () => {
  try {
    const { data } = await axios.get('v3/articles/');
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetArticleById = async id => {
  try {
    const { data } = await axios.get(`v3/articles/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchNewsByFilter = async filter => {
  try {
    const { data } = await axios.get(
      `v3/articles/?title_contains=${filter}&summary_contains=${filter}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
