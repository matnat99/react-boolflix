import { useDataContext } from "../contexts/DataContext";
import Movie from "./Movie";
import TvSeries from "./TvSeries";
import { useRef } from "react";

const flagImages = {
  it: "https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg",
  en: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
  fr: "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
  es: "https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg",
  de: "https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg",
  ja: "https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg",
};

const getFlagImage = (languageCode) => {
  return flagImages[languageCode] || "";
};

export default function Main() {
  const { movies, tvSeries } = useDataContext();
  const moviesRef = useRef(null);
  const seriesRef = useRef(null);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <main>
      <div>
        <section className="movies">
          {movies.length > 0 && <h1>Film</h1>}
          {movies.length > 0 && (
            <>
              {movies.length >= 4 && (
                <button
                  className="scroll-btn left"
                  onClick={() => scrollLeft(moviesRef)}
                >
                  &#10094;
                </button>
              )}
              <div className="carousel" ref={moviesRef}>
                <ul className="flex-container">
                  {movies.map((movie) => (
                    <li key={movie.id}>
                      <Movie movie={movie} getFlagImage={getFlagImage} />
                    </li>
                  ))}
                </ul>
              </div>
              {movies.length >= 4 && (
                <button
                  className="scroll-btn right"
                  onClick={() => scrollRight(moviesRef)}
                >
                  &#10095;
                </button>
              )}
            </>
          )}
        </section>

        <section className="series">
          {tvSeries.length > 0 && <h1>Serie TV</h1>}
          {tvSeries.length > 0 && (
            <>
              {tvSeries.length >= 4 && (
                <button
                  className="scroll-btn left"
                  onClick={() => scrollLeft(seriesRef)}
                >
                  &#10094;
                </button>
              )}
              <div className="carousel" ref={seriesRef}>
                <ul className="flex-container">
                  {tvSeries.map((series) => (
                    <li key={series.id}>
                      <TvSeries series={series} getFlagImage={getFlagImage} />
                    </li>
                  ))}
                </ul>
              </div>
              {tvSeries.length >= 4 && (
                <button
                  className="scroll-btn right"
                  onClick={() => scrollRight(seriesRef)}
                >
                  &#10095;
                </button>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
}
