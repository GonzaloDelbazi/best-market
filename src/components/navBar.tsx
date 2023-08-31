import "./navBar.scss"

const NavBar = () => {

    return (
        <nav className="nav-bar">
            <div className="logo">Logo</div>
            <ul className="nav-link">
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className="menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li className="services">
                        <a href="/Services">Services</a>
                        <ul className="dropdown">
                            <li><a href="/">Something 1</a></li>
                            <li><a href="/">Something 2</a></li>
                            <li><a href="/">Something 3</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Somewhere</a></li>
                    <li><a href="/">Contact</a></li>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;