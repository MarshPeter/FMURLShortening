import "./navigation-bar.css";

interface ScreenType {
    desktopOrMobile: "desktop" | "mobile";
}

export default function NavigationBar({ desktopOrMobile }: ScreenType) {
    return (
        <nav className={`navigation-container ${desktopOrMobile}`}>
            <div className="navigation__page-links-container">
                <a className="navigation__page-link" href="">
                    Features
                </a>
                <a className="navigation__page-link" href="">
                    Pricing
                </a>
                <a className="navigation__page-link" href="">
                    Resources
                </a>
            </div>
            <div className="navigation__authentification-links-container">
                <a className="navigation__auth-link" href="">
                    Login
                </a>
                <a className="navigation__auth-link link-button" href="">
                    Sign Up
                </a>
            </div>
        </nav>
    );
}
