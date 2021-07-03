import { Grid } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import { filterByMenu } from '../../Constants/menu';
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

  const getCategoryString = () => {
    return filterByMenu.filter(menu => menu.id === category)[0].text;
  }

  const getFormattedDate = () => {
    return moment(time).format('MMMM Do YYYY, h:mm:ss a');
  }

  return (
    <Grid item xs={3}>
      <a href={url} alt=''>
        <div className='item-card'>
          <div className='item-content'>
            <div className='item-title'>
              {text}
            </div>
            <div className='item-content-flex'>
              <img src={profile_picture} alt='' className='item-profile-picture'/>
              <div className='item-username'>
                {username}
              </div>
            </div>
            <div className='item-content-flex'>
              {getFormattedDate()}
            </div>
            <div className='item-category'>{getCategoryString()}</div>
          </div>
        </div>
      </a>
    </Grid>
  )
}

export default ItemCard;