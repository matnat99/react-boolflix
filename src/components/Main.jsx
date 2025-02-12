import { useDataContext } from "../contexts/DataContext";

export default function Main() {
  const { movies } = useDataContext();

  const { series } = useDataContext();

  return (
    <main>
      <h1>Lista dei film</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h1>{movie.title}</h1>
            <h2>{movie.original_title}</h2>
            <h3>{movie.original_language}</h3>
            <h3>{movie.vote_average}</h3>
          </li>
        ))}
      </ul>
    </main>
  );
}
