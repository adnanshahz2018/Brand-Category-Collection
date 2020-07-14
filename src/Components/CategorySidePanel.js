import React from 'react'
import {Link} from 'react-router-dom'
import '../styles.css'

export default function CategorySidePanel() {
    return (
        <div>
            <ul className="productlinks">
                   <Link className="link panel" to='/category'>   Default     </Link> 
                   <Link className="link panel"  to='/category/menfashion'>   Men    </Link> 
                   <Link className="link panel" to='/category/womenfashion' >     Women    </Link>
               </ul>
        </div>
    )
}
