import '../sass/main.scss';

import { Routes, Route } from 'react-router-dom';
import { SearchPage } from 'pages/SearchPage';
import { Article } from './Article/Article';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/article/:articleId" element={<Article />} />
      </Routes>
    </>
  );
};
