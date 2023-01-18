import { useParams } from 'react-router-dom';
import { fetArticleById } from 'API/news';
import { useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { lorem } from 'lorem';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
export const Article = () => {
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const { imageUrl, title } = article;
  const clickHandler = () => {
    navigate(-2);
  };

  useEffect(() => {
    fetArticleById(articleId)
      .then(result => {
        setArticle(result);
      })
      .catch(error => console.log(error.message));
    window.scroll(0, 0);
  }, [articleId]);

  return (
    <>
      {imageUrl ? (
        <img src={imageUrl} alt="article background" className="article__img" />
      ) : (
        <Loader />
      )}
      <article className="article__content">
        <h2 className="article__title">{title}</h2>
        <p className="article__text">{lorem}</p>
      </article>
      <button className="article__button" onClick={clickHandler}>
        <KeyboardBackspaceIcon sx={{ marginRight: '6px' }} />
        Back to homepage
      </button>
    </>
  );
};
