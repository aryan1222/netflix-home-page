import './App.css';
import Row from'./components/Row';
import requests from './services/requests';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarger={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLarger={false}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLarger={false}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLarger={false}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLarger={false}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLarger={false}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLarger={false}/>
    </div>
  );
}

export default App;
