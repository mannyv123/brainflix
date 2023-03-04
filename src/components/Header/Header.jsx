import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";

function Header() {
    return (
        <header>
            <nav className="nav">
                <a href="#">
                    <img className="nav__logo" src={logo} alt="brainflix logo" />
                </a>
                <div className="nav__container">
                    <div className="nav__search">
                        <img src={searchIcon} alt="search icon" className="nav__search-icon" />
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                            className="nav__search-input"
                        />
                    </div>
                    <a className="button button__upload--tablet" href="#">
                        <img src={uploadIcon} alt="upload video icon" className="button__upload-icon" />
                        Upload
                        <div className="button__upload-icon button--hidden"></div>
                    </a>
                    <div className="nav__avatar"></div>
                    <a className="button button__upload--mobile" href="#">
                        <img src={uploadIcon} alt="upload video icon" className="button__upload-icon" />
                        Upload
                        <div className="button__upload-icon button--hidden"></div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
