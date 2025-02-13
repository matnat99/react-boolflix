export default function Movie({ movie, getFlagImage }) {
  return (
    <>
      <h3>{movie.title}</h3>
      <p>
        <strong>Titolo originale:</strong> {movie.original_title}
      </p>
      <div>
        <strong>Lingua originale:</strong>
        <img
          className="img-flag"
          src={getFlagImage(movie.original_language)}
          alt={movie.original_language}
        />
      </div>
      <p>
        <strong>Voto:</strong> {movie.vote_average}
      </p>
    </>
  );
}
