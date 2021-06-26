import {
  Grid,
  makeStyles,
  Modal
} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
// import { useHistory, useLocation } from 'react-router';
// import { getAllProducts, getProductsByQueries } from '../../firebase';
import qs from 'query-string';
import './SearchPage.css';
// import Pagination from '@material-ui/lab/Pagination';
// import FilterModal from '../../Components/FilterModal/FilterModal';
import FilterListIcon from '@material-ui/icons/FilterList';
import ItemCard from '../../Components/ItemCard/ItemCard';
// import { getAllCategories, getCategoriesByTopics } from '../../Constants/categories';
// import { allMarketplaces } from '../../Constants/marketplaces';
import SortMenu from '../../Components/SortMenu/SortMenu';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { filterByMenu, sortByMenu } from '../../Constants/menu';
import { getAllTweets } from '../../controller';

// var _ = require('lodash');

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     borderRadius: '8px',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

const SearchPage = () => {
//   const classes = useStyles();
//   const history = useHistory();
//   const location = useLocation();

//   const [items, setItems] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [page, setPage] = useState(1);
//   const [minPrice, setMinPrice] = useState(null);
//   const [maxPrice, setMaxPrice] = useState(null);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedMarketplaces, setSelectedMarketplaces] = useState([]);
//   const [selectedRating, setSelectedRating] = useState(null);
  // const [refresh, setRefresh] = useState(0);
  const [tweets, setTweets] = useState([]);
  const [sortBy, setSortBy] = useState('-');
  const [anchorSortMenu, setAnchorSortMenu] = useState(null);
  const [filterBy, setFilterBy] = useState('all');
  const [anchorFilterMenu, setAnchorFilterMenu] = useState(null);

//   const queries = qs.parse(location.search);

//   const searchQuery = queries.query;
  
//   useEffect(() => {
//     const showModal = async () => {
//       try {
//         if (location.state.filterModalOpen === true){
//           setOpenModal(true);
//         }
//       } catch (error) {
//         return;
//       }
//     }
//     showModal();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       const filters = {
//         minPrice: !!minPrice ? minPrice : 0,
//         maxPrice: !!maxPrice ? maxPrice : Math.pow(10, 10),
//         selectedCategories:
//           !_.isEmpty(selectedCategories) ? getCategoriesByTopics(selectedCategories) : getAllCategories(),
//         selectedMarketplaces:
//           !_.isEmpty(selectedMarketplaces) ? selectedMarketplaces : allMarketplaces,
//         selectedRating: !!selectedRating ? selectedRating : 0,
//         sortBy: sortBy === 'rating' ? 'rating' : 'price',
//         ascendingOrder: sortBy === 'lowest-fee' ? true : false
//       };

//       const fetchedItems = _.isEmpty(queries) ? 
//         await getAllProducts(filters) : await getProductsByQueries(queries, filters);

//       setItems(fetchedItems);
//     }
//     fetchData();
//   }, [location, refresh, sortBy]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTweets = await getAllTweets();
      setTweets(fetchedTweets);
    }
    fetchData();
  }, []);

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

//   const handleFilterByPrice = (tempMinPrice, tempMaxPrice) => {
//     setOpenModal(false);
//     history.push({
//       search: `?query=${!!searchQuery || ''}${!!tempMinPrice ? `&minPrice=${tempMinPrice}` : ''}${!!tempMaxPrice ? `&maxPrice=${tempMaxPrice}` : ''}`,
//       pathname: '/business/'
//     })
//   }

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
          <SearchBar/>
        </Grid>
        <Grid item xs={6}>
          <div style={{float: 'right', marginRight: '30px'}}>
            {renderSortByMenu()}
          </div>
        </Grid>
      </Grid>
      {renderTweetCards()}
      {/* <div className='pagination-container'>
        <Pagination
          count={Math.ceil(items.length)}
          shape="rounded"
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      </div> */}
    </div>
  )
}

export default SearchPage;