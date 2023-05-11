const API_KEY = '22c9588ca6f2001300f1db06af1eb339';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaires: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

const requestMovies = [
  {
    title: "NETFLIX ORIGINALS",
    url: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },
  {
    title: "Trending Now",
    url: requests.fetchTrending,
    isLargeRow: false,
  },
  {
    title: "Top Rated",
    url: requests.fetchTopRated,
    isLargeRow: false,
  },
  {
    title: "Action Movies",
    url: requests.fetchActionMovies,
    isLargeRow: false,
  },
  {
    title: "Comedy Movies",
    url: requests.fetchComedyMovies,
    isLargeRow: false,
  },
  {
    title: "Horror Movies",
    url: requests.fetchHorrorMovies,
    isLargeRow: false,
  },
  {
    title: "Romance Movies",
    url: requests.fetchRomanceMovies,
    isLargeRow: false,
  },
  {
    title: "Documentaries",
    url: requests.fetchDocumentaires,
    isLargeRow: false,
  },
]

export default requestMovies;