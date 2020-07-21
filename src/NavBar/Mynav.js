import React from 'react'
import {Link} from 'react-router-dom'
import '../styles.css';

export default function Mynav() {
    return (
            <nav className="nav">
                <ul className="nav-links">
                    <Link className="link" to='/'>           Home           </Link>
                    <Link className="link" to='/brand'>      Brands         </Link>
                    <Link className="link" to='/category'>   Categories     </Link> 
                    <Link className="link" to='/about' >     About      </Link>
                </ul>
            </nav>
    )
}
