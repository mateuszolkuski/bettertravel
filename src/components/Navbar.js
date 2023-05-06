import { Component } from "react";
import "./styles/NavbarStyles.scss";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = { clicked: false, loggedIn: false, isLoginPage: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    componentDidMount() {
        const storedName = localStorage.getItem("name");
        if (storedName) {
            this.setState({ loggedIn: true});
        }

        const currentUrl = window.location.pathname;
        if (currentUrl === "/login") {
            this.setState({ isLoginPage: true });
        }
    }

    handleLogout = () => {
        localStorage.removeItem("name");
        this.setState({loggedIn: false});
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">BetterTravel</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
                        {" "}
                    </i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                    {this.state.loggedIn ? (
                        <li>
                            <span className="nav-link">{`Hi ${localStorage.getItem("name")}`}</span>
                            <button onClick={this.handleLogout}>Log Out</button>
                        </li>
                    ) : (
                        <li>
                            <button onClick={() => window.location.href = '/login'}>Log In</button>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
