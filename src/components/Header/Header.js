import './Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

import AuthButton from './AuthButton';

export function Header(props, context) {

  return (
    <header className="header" role="banner" aria-label="Primary navigation">
      <div className="content">
        <h1 className="site-title">
          <Link to="/" >SEEK</Link>
        </h1>
        {
          // context.router.isActive('/', true)
          //   ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}></a>
          //   : null
        }
        <AuthButton />
      </div>
    </header>
  );
}

export default Header;
