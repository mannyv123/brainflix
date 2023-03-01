import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";

function Header() {
    return (
        <header>
            <nav className="nav">
                <a className="nav__logo" href="#">
                    <img src={logo} alt="brainflix logo" />
                </a>
                <div className="nav__container">
                    <div className="nav__search">
                        {/* <img src= alt="search icon" className="nav__search-icon" /> */}
                        <input type="text" name="search" id="search" placeholder="Search" />
                    </div>
                    <a className="button button__upload button__upload--tablet" href="#">
                        Upload
                    </a>
                    <div className="nav__avatar"></div>
                    <a className="button button__upload button__upload--mobile" href="#">
                        Upload
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
