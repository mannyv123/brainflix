import Button from "../Button/Button";
import "./NavContainer.scss";
import searchIcon from "../../assets/icons/search.svg";

function NavContainer() {
    const upload = "Upload";
    return (
        <div className="nav__container">
            <div className="nav__search">
                <img src={searchIcon} alt="search icon" className="nav__search-icon" />
                <input type="text" name="search" id="search" placeholder="Search" />
            </div>
            <Button className="button button__upload--tablet" text={upload} />
            <div className="nav__avatar"></div>
            <Button className="button button__upload--mobile" text={upload} />
        </div>
    );
}

export default NavContainer;
