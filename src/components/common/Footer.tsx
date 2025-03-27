import github from "../../assets/github.png";
import qiita from "../../assets/qiita.png";
import x from "../../assets/x.png";

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">© 2025 Takaaki Kanda. All Rights Reserved.</p>
      <p className="footer-text">Built React.</p>
      <ul className="sns-link-list">
        <li className="sns-link-item">
          <a
            href="https://github.com/kandalog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </li>
        <li className="sns-link-item">
          <a
            href="https://qiita.com/kandalog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={qiita} alt="qiita" />
          </a>
        </li>
        <li className="sns-link-item">
          <a
            href="https://x.com/tee_develop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={x} alt="x" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
