import { FilterBar } from 'components/FilterBar/FilterBar';
import { ListNews } from 'components/ListNews/ListNews';
import { Container } from 'components/Container/Container';
import { useDispatch } from 'react-redux';
import {
  fetchArticles,
  fetchArticlesByFilter,
} from '../redux/news/news-operations';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import FilterContext from '../components/Context/FilterContext/FilterContext';
export const SearchPage = () => {
  const [highLightWords, setHighLightWords] = useState([]);
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();

  const filterHandler = data => {
    if (data === '') {
      dispatch(fetchArticles());
      setSearchParams({});
      return;
    }
    dispatch(fetchArticlesByFilter(data));
    setSearchParams({
      title_contains: data,
      summary_contains: data,
    });
  };

  const highLighter = words => {
    const splittedWords = words.split(' ');
    setHighLightWords(splittedWords);
  };

  return (
    <FilterContext.Provider value={{ highLightWords, highLighter }}>
      <Container>
        <FilterBar filterHandler={filterHandler} highLighter={highLighter} />
        <ListNews />
      </Container>
    </FilterContext.Provider>
  );
};
