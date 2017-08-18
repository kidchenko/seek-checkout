import './Footer.css';

import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-name" role="contentinfo">
      <p id="footer-name">
        Created with &lt;3 by <a href="https://www.google.com.br/search?q=@kidchenko" target="_blank" rel="noopener noreferrer">@kidchenko</a> - 2017
      </p>
      <p>
        I have learned a lot building this app
      </p>
    </footer>
  );
}
