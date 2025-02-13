import { useDataContext } from "../contexts/DataContext";
import Movie from "./Movie";
import TvSeries from "./TvSeries";

const flagImages = {
  it: "https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
  en: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
  fr: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
  es: "https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg",
  de: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
  ja: "https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg",
};

const getFlagImage = (languageCode) => {
  return flagImages[languageCode] || flagImages[""];
};

export default function Main() {
  const { movies, tvSeries } = useDataContext();

  return (
    <main>
      <div className="container">
        <h1>Lista dei film e delle serie TV</h1>

        <section className="movies">
          <h2>Film</h2>
          <ul className="flex-container">
            {movies.map((movie) => (
              <li key={movie.id}>
                <Movie movie={movie} getFlagImage={getFlagImage} />
              </li>
            ))}
          </ul>
        </section>

        <section className="series">
          <h2>Serie TV</h2>
          <ul className="flex-container">
            {tvSeries.map((series) => (
              <li key={series.id}>
                <TvSeries series={series} getFlagImage={getFlagImage} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
