import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ReactComponent as DateIcon } from '../../icons/date-icon.svg';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import moment from 'moment';
import { CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export const ListNewsItem = ({ imageUrl, updatedAt, title, summary, id }) => {
  const navigate = useNavigate();
  const clickHandler = e => {
    navigate(`article/${id}`);
  };
  const date = moment.utc(updatedAt).format('MMM Do, YYYY');

  return (
    <Card sx={{ maxWidth: 400, height: 530 }} onClick={clickHandler}>
      <CardActionArea>
        <CardMedia component="img" height="217" image={imageUrl} alt={title} />
        <CardContent sx={{ padding: '25px' }}>
          <div className="news-list-item__date">
            <DateIcon className="news-list-item__icon" />
            <p className="news-list-item__date--text">{date}</p>
          </div>

          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button className="news-list-item__button" onClick={clickHandler}>
          Read more
          <KeyboardBackspaceIcon
            sx={{ marginRight: '6px', transform: 'rotate(180deg)' }}
          />
        </button>
      </CardActions>
    </Card>
  );
};
