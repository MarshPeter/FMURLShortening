import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import NavigationBar from "../NavigationBar/NavigationBar";

import "./Header.css";

export default function Header() {
    const [showMobileNavigation, setShowMobileNavigation] = useState(false);

    function handleBurgerClick(e) {
        e.preventDefault();
        setShowMobileNavigation(!showMobileNavigation);
    }

    return (
        <div className="header-container">
            <img
                className="header__logo"
                src="../../../public/logo.svg"
                alt="Shortly company logo"
            />
            <NavigationBar desktopOrMobile="desktop" />
            <button className="header__hamburger" onClick={handleBurgerClick}>
                <FontAwesomeIcon size="2x" icon={faBars} />
            </button>
            {showMobileNavigation ? (
                <NavigationBar desktopOrMobile="mobile" />
            ) : null}
        </div>
    );
}
