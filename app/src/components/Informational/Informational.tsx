import Keynote from "../Keynote/Keynote";
import "./informational.css";

export default function Informational() {
    const keynotes = [
        {
            title: "Brand Recognition",
            description:
                "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
            icon: "../../../public/icon-brand-recognition.svg",
            altText: "increasing graph icon",
            decorationClass: "keynote__decoration",
            desktopOffsetClass: "",
        },
        {
            title: "Detailed Records",
            description:
                "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
            icon: "../../../public/icon-detailed-records.svg",
            altText: "candle icon",
            decorationClass: "keynote__decoration",
            desktopOffsetClass: "one-offset",
        },
        {
            title: "Fully Customizable",
            description:
                "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
            icon: "../../../public/icon-fully-customizable.svg",
            altText: "Texta/Pen/brush icon",
            decorationClass: "hide",
            desktopOffsetClass: "two-offset",
        },
    ];
    return (
        <div className="informational__container">
            <div className="informational__headline">
                <h2 className="informational__title">Advanced Statistics</h2>
                <p className="informational__description basic-text">
                    Track how your links are performing across the web with our
                    advancecd statistics dashboard.
                </p>
            </div>
            <div className="informational__keynote-container">
                {keynotes.map((keynote) => {
                    return (
                        <Keynote
                            title={keynote.title}
                            description={keynote.description}
                            icon={keynote.icon}
                            altText={keynote.altText}
                            decorationClasses={keynote.decorationClass}
                            containerOffset={keynote.desktopOffsetClass}
                        />
                    );
                })}
                <div className="informational__keynote-decorator"></div>
            </div>
        </div>
    );
}
