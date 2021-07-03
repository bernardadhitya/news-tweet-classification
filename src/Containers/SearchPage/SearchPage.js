import {
  Grid
} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import './SearchPage.css';
import ItemCard from '../../Components/ItemCard/ItemCard';
import SortMenu from '../../Components/SortMenu/SortMenu';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { filterByMenu, sortByMenu } from '../../Constants/menu';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

const SearchPage = () => {
  const [tweets, setTweets] = useState([]);
  const [sortBy, setSortBy] = useState('-');
  const [anchorSortMenu, setAnchorSortMenu] = useState(null);
  const [filterBy, setFilterBy] = useState('all');
  const [anchorFilterMenu, setAnchorFilterMenu] = useState(null);
  const [searchString, setSearchString] = useState('');

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTweets = location.state.tweets;
      const filteredTweetsBySearch = fetchedTweets.filter(tweet =>
        tweet.text.toLowerCase().includes(searchString.toLowerCase()) 
        || tweet.username.toLowerCase().includes(searchString.toLowerCase())
      );
      const filteredTweetsByCategory = filterBy === 'all' ? filteredTweetsBySearch :
      filteredTweetsBySearch.filter(tweet =>
        tweet.category.toLowerCase() === filterBy.toLowerCase()
      )
      const sortedTweets = sortBy === '-' ? filteredTweetsByCategory :
      filteredTweetsByCategory.sort((a,b) => {
        if (sortBy === 'retweets') {
          return b.retweets - a.retweets;
        } else if (sortBy === 'likes') {
          return b.likes - a.likes;
        } else if (sortBy === 'recent') {
          return moment(b.time).diff(moment(a.time));
        } else if (sortBy === 'oldest') {
          return moment(a.time).diff(moment(b.time));
        }
      })
      setTweets(sortedTweets);
    }
    fetchData();
  }, [searchString, filterBy, sortBy]);

  const renderSortByMenu = () => {
    return (
      <div style={{display: 'flex', marginTop: '10px'}}>
        <div style={{fontFamily: 'galano-grotesque-medium', margin: '20px'}}>
          Sort By:
        </div>
        <SortMenu
          anchorSortMenu={anchorSortMenu}
          setAnchorSortMenu={setAnchorSortMenu}
          setSortBy={setSortBy}
          sortBy={sortBy}
          menu={sortByMenu}
        />
        <div style={{width: '10px'}}/>
        <div style={{fontFamily: 'galano-grotesque-medium', margin: '20px'}}>
          Filter By:
        </div>
        <SortMenu
          anchorSortMenu={anchorFilterMenu}
          setAnchorSortMenu={setAnchorFilterMenu}
          setSortBy={setFilterBy}
          sortBy={filterBy}
          menu={filterByMenu}
        />
      </div>
    )
  }

  const renderTweetCards = () => {
    return tweets.length > 0 ? (
      <Grid container>
        { tweets.map(tweet => {
            const { url, username, text, time, likes, retweets, profile_picture, category } = tweet;
            return (
              <ItemCard
                url={url}
                username={username}
                text={text}
                time={time}
                likes={likes}
                retweets={retweets}
                profile_picture={profile_picture}
                category={category}
              />
            )
        })}
      </Grid>
    ) : (
      <div style={{margin: '40px 0 0 40px'}}>
        <h3>Tidak menemukan barang yang anda cari</h3>
      </div>
    )
  }

  return (
    <div style={{margin: '60px 100px'}}>
      <div style={{
        fontFamily: 'galano-grotesque-bold',
        fontSize: '36px'
      }}>
        News Tweet Classification
      </div>
      <Grid container>
        <Grid item xs={6}>
          <SearchBar
            handleSearch={(value) => setSearchString(value)}
          />
        </Grid>
        <Grid item xs={6}>
          <div style={{float: 'right', marginRight: '30px'}}>
            {renderSortByMenu()}
          </div>
        </Grid>
      </Grid>
      {renderTweetCards()}
    </div>
  )
}

export default SearchPage;