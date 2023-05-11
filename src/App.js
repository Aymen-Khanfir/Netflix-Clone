import React from "react";
import "./App.css";
import Row from "./components/Row/Row";
import requestMovies from "./requests";
import Banner from "./components/Banner/Banner"

function App() {
  return (
    <div className="App">
      {requestMovies.map((movie, index) => (
        <Row key={index} title={movie.title} fetchUrl={movie.url} isLargeRow={movie.isLargeRow}/>
      ))}
      <Banner />
    </div>
  );
}

export default App;
