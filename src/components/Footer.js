import "./styles/FooterStyles.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>BetterTravel</h1>
                    <p>every place is beautiful, depends on how you look at it</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Quick Support</h4>
                    <a href="/contact">Have an issue?</a>
                    <a href="/contact">Some questions?</a>
                    <a href="/">Privacy Policy</a>
                    <a href="https://github.com/mateuszolkuski/bettertravel" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;