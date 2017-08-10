import './Header.css';

import React from 'react';

export default function Header(props) {

  return (
    <header className="header" role="banner" aria-label="Primary navigation">
      <div className="content">
        <h1 className="site-title">
          SEEK
        </h1>
      </div>
    </header>
  );
}
