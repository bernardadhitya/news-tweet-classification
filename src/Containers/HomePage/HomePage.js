import { Grid } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './HomePage.css';
import IconUpload from '../../Assets/icons/IconUpload';
import { uploadCsv } from '../../controller';

const HomePage = () => {

  const hiddenFileInput = useRef(null);

  const history = useHistory();

  const onFileUpload = async (event) => {
    const result = await uploadCsv(event.target.files[0]);
    console.log(result);
    history.push({
      pathname: '/search',
      state: {
        tweets: result
      }
    });
  };

  const handleUploadButtonClicked = () => {
    hiddenFileInput.current.click();
  }
  
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
                <div style={{fontFamily: 'galano-grotesque-medium', fontSize: '14px', marginTop: '14px'}}>
                  Upload a .csv file filled with tweets
                </div>
              </div>
              <div>
                <input
                  type="file"
                  onChange={onFileUpload}
                  style={{display: 'none'}}
                  ref={hiddenFileInput}
                />
              </div>
              <div style={{display: 'flex'}}>
                <div
                  className='home-upload-csv-button'
                  onClick={() => handleUploadButtonClicked()}
                >
                  <IconUpload />
                  <div style={{width: '8px'}}/>
                  <p>UPLOAD CSV</p>
                </div>
                <div style={{fontFamily: 'galano-grotesque-medium', fontSize: '18px', margin: '35px 20px 0 15px'}}>
                  OR
                </div>
                <div
                  className='home-use-demo-button'
                  onClick={() => history.push({
                    pathname: '/search',
                    state: {
                      filterModalOpen: true
                    }
                  })}
                >
                  <p>USE DEMO</p>
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