import { useState } from "react";
import { useDataContext } from "../contexts/DataContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { setMovies, setTvSeries } = useDataContext();

  const handleSearch = (event) => {
    event.preventDefault();

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
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        type="search"
        placeholder="Cerca..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
