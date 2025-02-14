import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-container">
          <div className="header-menu-left">
            <div className="img-container">
              <img src="img/logoBoolflix.png" alt="Logo" />
            </div>
            <nav>
              <ul className="header-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Serie Tv</a>
                </li>
                <li>
                  <a href="#">Film</a>
                </li>
                <li>
                  <a href="#">Originali</a>
                </li>
                <li>
                  <a href="#">Aggiunti di recente</a>
                </li>
                <li>
                  <a href="#">La mia lista</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-menu-right">
            <SearchBar />
            <ul>
              <li>
                <a href="#">
                  <i className="fa-solid fa-bell"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-user"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
