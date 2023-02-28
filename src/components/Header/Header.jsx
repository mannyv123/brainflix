import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import NavContainer from "../NavContainer/NavContainer";

function Header() {
    return (
        <header>
            <nav className="nav">
                <a className="nav__logo" href="#">
                    <img src={logo} alt="brainflix logo" />
                </a>
                <NavContainer />
            </nav>
        </header>
    );
}

export default Header;
