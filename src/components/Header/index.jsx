import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

function Header() {
    return (
        <div id="header-page">
            <header>
                <nav>
                    <Link to="/"><h1>Fruit App</h1></Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;