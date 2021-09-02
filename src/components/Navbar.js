import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav> 
                <ul>
                <li className="title">Chris Van Etten - Official Portfolio</li>
                <li>
                    <Link to="/">
                       About
                    </Link>
                </li>
                <li>
                     <Link to="/work">
                        Prior Work
                     </Link>
                </li>
                <li>
                     <Link to="/contact">
                        Contact
                     </Link>
                </li>
                </ul>
            </nav>
        </div>
    )
}


export default Navbar;
