import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Questions Creator</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-4">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            Quiz App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse align-items-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item text-center">
                <Link href="/add-question" className="nav-link text-dark bg-warning">
                  Add Question
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

