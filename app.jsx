import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">scary hotel</div>
      </header>

      <main className="main">
        <nav className="social-links">
          <a href="https://scaryhotel.bandcamp.com/" className="social-link">bandcamp</a>
          <a href="https://www.facebook.com/scaryhotel" className="social-link">facebook</a>
          <a href="https://www.instagram.com/scaryhotel/" className="social-link">instagram</a>
          <a href="https://open.spotify.com/artist/35TNQn7maLih5dc83ZBWCp?si=IkiPafjCSNSaZXv-EG9Jyg" className="social-link">spotify</a>
        </nav>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
