import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <div > 
      <Main />
      <Row title="Latest" fetchLink={requests.requestNowPlaying}/>
      <Row title="Trending" fetchLink={requests.requestTrending}/>
      <Row title="Popular" fetchLink={requests.requestPopular}/>
      <Row title="Top Rated" fetchLink={requests.requestTopRated}/>
      <Row title="Horror" fetchLink={requests.requestHorror}/>
      <Row title="Up Coming" fetchLink={requests.requestUpComing}/>
    </div>
  );
}

export default Home;
