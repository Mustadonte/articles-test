import { useEffect, useContext } from 'react';
import { ListNewsItem } from 'components/ListNewsItem/ListNewsItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from 'redux/news/news-operations';
import FilterContext from 'components/Context/FilterContext/FilterContext';
import Highlighter from 'react-highlight-words';
import { Loader } from 'components/Loader/Loader';
export const ListNews = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.news.items);
  const loading = useSelector(state => state.news.loading);

  const { highLightWords } = useContext(FilterContext);

  useEffect(() => {
    if (list.length > 0) {
      return;
    }
    dispatch(fetchArticles());
  }, [dispatch, list.length]);

  return (
    <>
      {loading && <Loader />}
      <ul className="news__list">
        {list?.map(item => {
          return (
            <li key={item.id}>
              <ListNewsItem
                key={item.id}
                updatedAt={item.updatedAt}
                imageUrl={item.imageUrl}
                title={
                  <Highlighter
                    highlightClassName="highlighter"
                    searchWords={highLightWords}
                    autoEscape={true}
                    textToHighlight={item.title}
                  />
                }
                summary={
                  <Highlighter
                    highlightClassName="highlighter"
                    searchWords={highLightWords}
                    autoEscape={true}
                    textToHighlight={`${item.summary.slice(0, 99)}...`}
                  />
                }
                id={item.id}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
