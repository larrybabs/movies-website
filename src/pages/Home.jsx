import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <div > 
      <Main />
      <Row rowId="1" title="Latest" fetchLink={requests.requestNowPlaying}/>
      <Row rowId="2" title="Trending" fetchLink={requests.requestTrending}/>
      <Row rowId="3" title="Popular" fetchLink={requests.requestPopular}/>
      <Row rowId="4" title="Top Rated" fetchLink={requests.requestTopRated}/>
      <Row rowId="5" title="Horror" fetchLink={requests.requestHorror}/>
      <Row rowId="6" title="Up Coming" fetchLink={requests.requestUpComing}/>
    </div>
  );
}

export default Home;
