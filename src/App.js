import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import requestMovies from "./requests";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      {requestMovies.map((movie, index) => (
        <Row
          key={index}
          title={movie.title}
          fetchUrl={movie.url}
          isLargeRow={movie.isLargeRow}
        />
      ))}
    </div>
  );
}

export default App;
