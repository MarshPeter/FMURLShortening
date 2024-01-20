import "./hero.css";

export default function Hero() {
    return (
        <>
            <div className="hero__container">
                <img
                    className="hero__image"
                    src="../public/illustration-working.svg"
                    alt="person working at a desk"
                />
                <div className="hero__summary">
                    <h1 className="hero__title">
                        More than just shorter links
                    </h1>
                    <p className="hero__description basic-text">
                        Build your brand's recognition and get detailed insights
                        on how your links are performing.
                    </p>
                    <a className="hero__button link-button">Get Started</a>
                </div>
            </div>
        </>
    );
}
