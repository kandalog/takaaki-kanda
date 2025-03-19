function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Takaaki Kanda</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#about" className="header__nav-link">
              私について
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#career" className="header__nav-link">
              経験
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#project" className="header__nav-link">
              プロジェクト
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
