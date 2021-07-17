import {
  Grid
} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import './SearchPage.css';
import ItemCard from '../../Components/ItemCard/ItemCard';
import SortMenu from '../../Components/SortMenu/SortMenu';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { filterByMenu, sortByMenu } from '../../Constants/menu';
import moment from 'moment';
import { Pagination } from '@material-ui/lab';
import { getAllTweets } from '../../controller';

const SearchPage = () => {
  const [tweets, setTweets] = useState([]);
  const [sortBy, setSortBy] = useState('recent');
  const [anchorSortMenu, setAnchorSortMenu] = useState(null);
  const [filterBy, setFilterBy] = useState('all');
  const [anchorFilterMenu, setAnchorFilterMenu] = useState(null);
  const [searchString, setSearchString] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTweets = await getAllTweets();
      
      const filteredTweetsBySearch = fetchedTweets.filter(tweet =>
        tweet.text.toLowerCase().includes(searchString.toLowerCase()) 
        || tweet.username.toLowerCase().includes(searchString.toLowerCase())
      );
      const filteredTweetsByCategory = filterBy === 'all' ? filteredTweetsBySearch :
      filteredTweetsBySearch.filter(tweet =>
        tweet.category.toLowerCase() === filterBy.toLowerCase()
      )
      const sortedTweets = filteredTweetsByCategory.sort((a,b) => {
        if (sortBy === 'retweets') {
          return b.retweets - a.retweets;
        } else if (sortBy === 'likes') {
          return b.likes - a.likes;
        } else if (sortBy === 'recent') {
          return moment(b.time).diff(moment(a.time));
        } else if (sortBy === 'oldest') {
          return moment(a.time).diff(moment(b.time));
        } else {
          return moment(b.time).diff(moment(a.time));
        }
      })
      let groupedTweets = [];
      while (sortedTweets.length > 0) {
        groupedTweets.push(sortedTweets.splice(0,20))
      }
      setTweets(groupedTweets);
      setPage(1);
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
        { tweets[page-1].map(tweet => {
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
        <h3>No tweets are available. Please try again...</h3>
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
      <div className='pagination-container'>
        <Pagination
          count={Math.ceil(tweets.length)}
          shape="rounded"
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      </div>
    </div>
  )
}

export default SearchPage;