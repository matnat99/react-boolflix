export default function Movie({ movie, getFlagImage }) {
  const baseImageUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w342";
  const moviePosterUrl = movie.poster_path
    ? `${baseImageUrl}${imageSize}${movie.poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  const starsArray = [0, 1, 2, 3, 4];

  const vote = Math.min(Math.floor(movie.vote_average / 2 + 0.5), 5) || 1;

  return (
    <div className="card">
      <div>
        <img src={moviePosterUrl} alt={movie.title} />
      </div>
      <div className="hoverlay">
        <div className="description">
          <h3>{movie.title}</h3>
          <p>
            <strong>Titolo originale:</strong> {movie.original_title}
          </p>
          <div className="language">
            <strong>Lingua originale:</strong>
            <img
              className="img-flag"
              src={getFlagImage(movie.original_language)}
              alt={movie.original_language}
            />
          </div>
          <div className="vote-container">
            <strong>Voto:</strong>
            <div className="stars-container">
              {starsArray.map((index) => (
                <i
                  key={index}
                  className={`vote-star ${
                    index < vote ? "fas fa-star" : "far fa-star empty"
                  }`}
                ></i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
