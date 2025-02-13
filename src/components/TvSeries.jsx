export default function TvSeries({ series, getFlagImage }) {
  return (
    <>
      <h3>{series.name}</h3>
      <p>
        <strong>Titolo originale:</strong> {series.original_name}
      </p>
      <div>
        <strong>Lingua originale:</strong>
        <img
          className="img-flag"
          src={getFlagImage(series.original_language)}
          alt={series.original_language}
        />
      </div>
      <p>
        <strong>Voto:</strong> {series.vote_average}
      </p>
    </>
  );
}
