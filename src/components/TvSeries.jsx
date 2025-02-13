export default function TvSeries({ series, getFlagImage }) {
  const baseImageUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w342";
  const seriesPosterUrl = series.poster_path
    ? `${baseImageUrl}${imageSize}${series.poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  const starsArray = [0, 1, 2, 3, 4];

  const vote = Math.min(Math.floor(series.vote_average / 2 + 0.5), 5) || 1;

  return (
    <>
      <h3>{series.name}</h3>
      <p>
        <strong>Titolo originale:</strong> {series.original_name}
      </p>
      <img src={seriesPosterUrl} alt={series.name} />
      <div>
        <strong>Lingua originale:</strong>
        <img
          className="img-flag"
          src={getFlagImage(series.original_language)}
          alt={series.original_language}
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
    </>
  );
}
