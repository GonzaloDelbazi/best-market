import "./navBar.scss"
import ButtonSearch from "./../components/buttonSearch/buttonSearch"
import Logo from '../assets/react.svg'

const NavBar = () => {

    const search = (value: string) => {
        console.log(value);
    }

    return (
        <nav className="nav-bar nav-bar-dark">
            <div className="logo"><img width="50" height="50" src={Logo} alt="png" /></div>
            <ul className="nav-link">
                <input type="checkbox" id="toogle-menu"/>
                <label htmlFor="toogle-menu" className="hamburger">&#9776;</label>
                <div className="menu menu-dark">
            <ButtonSearch search={search} />
                    <li><a href="/home">Home</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li className="services">
                        <a href="/Services">Services</a>
                        <ul className="dropdown dropdown-dark">
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