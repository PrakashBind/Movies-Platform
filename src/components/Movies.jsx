// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Movies.css";

// const Movies = () => {
//   const [movies, setMovies] = useState([]); // state banaya

//   useEffect(() => {
//     axios
//       .get("http://www.omdbapi.com/?s=avengers&apikey=2f795971&page=1")
//       .then((response) => {
//         setMovies(response.data.Search); // OMDB data "Search" array ke andar hota hai
//       })
//       .catch((err) => {
//         console.error("Error fetching movies:", err.message);
//       });
//   }, []);

//   return (
//     <div className="movies">
//       <div className="movies-container">
//         <h1>🎬 Movies</h1>
//         <p>
//           Browse and explore the latest, trending, and classic movies with
//           details like title, year, and poster.
//         </p>

//         <div className="movies-grid">
//           {movies?.map((movie) => (
//             <div className="movie-card" key={movie.imdbID}>
//               <img
//                 src={
//                   movie.Poster !== "N/A"
//                     ? movie.Poster
//                     : "https://via.placeholder.com/300"
//                 }
//                 alt={movie.Title}
//               />
//               <h2>{movie.Title}</h2>
//               <p>{movie.Year}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Movies;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); // page number
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (pageNumber) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://www.omdbapi.com/?s=avengers&apikey=2f795971&page=${pageNumber}`
      );
      if (response.data.Search) {
        setMovies((prev) => [...prev, ...response.data.Search]); // append movies
      }
    } catch (err) {
      console.error("Error fetching movies:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(page); // load first page
  }, [page]);

  const loadMore = () => {
    if (page < 17) {
      setPage((prev) => prev + 1); // increase page till 17
    }
  };

  return (
    <div className="movies">
      <div className="movies-container">
        <h1>🎬 Movies</h1>
        <p>
          Browse and explore the latest, trending, and classic movies with
          details like title, year, and poster.
        </p>

        <div className="movies-grid">
          {movies?.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300"
                }
                alt={movie.Title}
              />
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {page < 17 && (
          <button className="load-more" onClick={loadMore} disabled={loading}>
            {loading ? "Loading..." : "More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Movies;
