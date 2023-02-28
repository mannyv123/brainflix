import "./NavContainer.scss";

function NavContainer() {
    return (
        <div className="nav__container">
            <input type="text" name="search" id="search" placeholder="Search" />
            <a href="#" className="nav__upload">
                Upload
            </a>
            <div className="nav__avatar"></div>
        </div>
    );
}

export default NavContainer;
