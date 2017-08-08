import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Card, CardMedia, CardContent } from 'material-ui';

const styleSheet = createStyleSheet(theme => ({
  shot: {
    padding: 12,
    width: 240,
    display: 'inline-block',
    margin: '0 18px 18px 0'
  },
  shotImg: {
    width: 240,
  },
  status: {
    float: 'left'
  },
  rebound: {
  }
}));

const Shot = (props) => {
  const { classes, shot, author } = props;

  return (
    <Card className={classes.shot}>
      <CardMedia>
        <a href={shot.url}>
          <img src={shot.image} className={classes.shotImg} />
        </a>
      </CardMedia>
      <ul className="status">
        <li className={classes.status}>
          <a className={classes.rebound}>
            <img src="img/icon-rebound.png" alt="Rebound" />
          </a>
        </li>
        <li className={classes.status}>
          <img className="attach-mark" src="img/icon-attach.png" alt="Attachment" />
        </li>
        <li className={classes.status}>
          <span className="views-count">{shot.viewsCount}</span>
        </li>
        <li className={classes.status}>
          <span className="comments-count">{shot.commentsCount}</span>
        </li>
        <li className={classes.status}>
          <a className="likes-count" href="#">{shot.likesCount}</a>
        </li>
      </ul>
      <div className="author">
        <a className="avatar" href="#">
          <img src={author.avatar} alt="Avatar" />
        </a>
        <a className="name" href="#">{author.name}</a>
        <a href="#">Pro</a>
      </div>
    </Card>
  );
};

Shot.propTypes = {
  classes: PropTypes.object.isRequired,
  shot: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    viewsCount: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
    likesCount: PropTypes.number.isRequired,
    authorId: PropTypes.number.isRequired
  }),
  author: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default withStyles(styleSheet)(Shot);