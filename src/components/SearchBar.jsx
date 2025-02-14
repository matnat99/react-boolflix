import { useState } from "react";
import { useDataContext } from "../contexts/DataContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { setMovies, setTvSeries } = useDataContext();

  const handleSearch = (event) => {
    event.preventDefault();

    if (!isVisible) {
      setIsVisible(true);
      return;
    }

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "bd07a5dce0667d02e7b5e731d8f1fc6f",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => {
        setMovies(res.data.results);

        axios
          .get("https://api.themoviedb.org/3/search/tv", {
            params: {
              api_key: "bd07a5dce0667d02e7b5e731d8f1fc6f",
              language: "it-IT",
              query: search,
            },
          })
          .then((res) => {
            setTvSeries(res.data.results);
          })
          .catch((error) => {
            console.error("Errore nella ricerca delle serie TV:", error);
          });
      })
      .catch((error) => {
        console.error("Errore nella ricerca dei film:", error);
      });

    setIsVisible(false);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      {isVisible && (
        <input
          className="search-bar"
          name="search"
          type="search"
          placeholder="Cerca..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      )}
      <button className="btn-search" type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}
