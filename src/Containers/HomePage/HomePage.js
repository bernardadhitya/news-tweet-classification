import { Grid } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {

  const history = useHistory();
  
  return (
    <div className='home-page-wrapper'>
      <div className='home-banner-wrapper'>
        <Grid container>
          <Grid item xs={6}>
            <div style={{marginTop: '60px'}}>
              <div style={{
                fontFamily: 'galano-grotesque-bold',
                fontSize: '64px',
                lineHeight: '120%'
              }}>
                {`News Tweet\nClassification`}
              </div>
              <div style={{marginLeft: '4px', marginTop: '14px'}}>
                <div style={{fontFamily: 'galano-grotesque-medium', fontSize: '18px'}}>
                  Automatically classify your news tweet dataset
                </div>
                <div style={{fontFamily: 'galano-grotesque-medium', fontSize: '18px'}}>
                  to its categories using AI
                </div>
              </div>
              <div style={{display: 'flex'}}>
                <div
                  className='home-redirect-button'
                  onClick={() => history.push('/search')}
                >
                  <p>EXPLORE NOW</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <img
              src={require('../../Assets/images/banner-image.png')}
              alt=''
              style={{height: '80%'}}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default HomePage;