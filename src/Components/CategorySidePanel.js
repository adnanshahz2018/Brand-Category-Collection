import React from 'react'
import {Link} from 'react-router-dom'
import '../styles.css'

export default function CategorySidePanel() {
    return (
            <table className="productlinks">
                <tr className="panel_links" >
                    <Link className="link" to='/category'>   Men     </Link> 
                </tr>
                <tr className="panel_links" >
                   <Link className="link"  to='/category/womenfashion'>   Women    </Link> 
                </tr>
                <tr className="panel_links" >
                   <Link className="link" to='/category/decoration' >     Decoration    </Link>
                </tr>
               </table>
    )
}
