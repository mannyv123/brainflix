import "./PageHeader.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

function PageHeader() {
    return (
        <header className="nav-header">
            {/* Main Navigation */}
            <nav className="nav">
                <Link to="/">
                    <img className="nav__logo" src={logo} alt="brainflix logo" />
                </Link>
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
                    <Link to="/upload" className="button button__upload--tablet">
                        <img src={uploadIcon} alt="upload video icon" className="button__upload-icon" />
                        Upload
                        <div className="button__upload-icon button--hidden"></div>
                    </Link>
                    <div className="nav__avatar"></div>
                    <Link to="/upload" className="button button__upload--mobile">
                        <img src={uploadIcon} alt="upload video icon" className="button__upload-icon" />
                        Upload
                        <div className="button__upload-icon button--hidden"></div>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default PageHeader;
