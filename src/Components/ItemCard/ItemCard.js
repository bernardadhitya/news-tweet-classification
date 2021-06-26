import { Grid } from '@material-ui/core';
import React from 'react';
import './ItemCard.css';

const ItemCard = (props) => {
  const {
    url,
    username,
    text,
    time,
    likes,
    retweets,
    profile_picture,
    category
  } = props;

  return (
    <Grid item xs={3}>
      <a href={url} alt=''>
        <div className='item-card'>
          <div className='item-content'>
            <div className='item-title'>{text}</div>
            <div className='item-category'>{category}</div>
          </div>
        </div>
      </a>
    </Grid>
  )
}

export default ItemCard;