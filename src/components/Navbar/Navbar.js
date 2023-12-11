import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import './Navbar.css';
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <header>
            <nav>
               <p >HackaBay</p>
                <ul id='nav-list'>
                    <li><Link to='/'>Home</Link></li>
                    <li><HashLink to='/#about' smooth>About</HashLink></li>
                    <li><HashLink to='/#contact' smooth>Contact Us</HashLink></li>
                </ul>
                <p onClick={()=>setShowSearch(!showSearch)}><FiSearch /></p>
            </nav>
            {
                showSearch && <SearchBar setShowSearch={setShowSearch} />
            }
        </header>
    );
}

export default Navbar;