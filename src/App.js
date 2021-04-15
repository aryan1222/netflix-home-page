import './App.css';
import Row from'./Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarger={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLarger={false}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLarger={false}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLarger={false}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLarger={false}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLarger={false}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} isLarger={false}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLarger={false}/>
    </div>
  );
}

export default App;
