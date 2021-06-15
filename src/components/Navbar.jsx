import {Link} from "react-router-dom";
import PokemonLogo from '@assets/pokemon.png';
import { navbar } from "@styles/navbar-style";

const Navbar = ({routing}) => { 
    return (  
        <>
            <header css={navbar}>
                <div className="container" id="header-container">
                    <Link to="/" className="main-logo">
                        <img src={PokemonLogo} alt="Pokemon Logo" height="50" width="136"/>
                    </Link>
                    <div id="nav-container">
                        {
                            routing.map( route => {
                                if(route.isNavShown){
                                    return(
                                        <Link to={route.path} key={route.key}>
                                            <img src={route.image} alt="img-nav" height="30" width="50"/>
                                            <span>{route.key}</span>
                                        </Link>
                                    );
                                }
                            })
                        }
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default Navbar;