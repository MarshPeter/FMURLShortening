import "./keynote.css";

interface Props {
    title: string;
    description: string;
    icon: string;
    altText: string;
    decorationClasses: string;
    containerOffset: string;
}

export default function Keynote({
    title,
    description,
    icon,
    altText,
    decorationClasses,
    containerOffset,
}: Props) {
    return (
        <div className={`keynote__container ${containerOffset}`}>
            <div className="keynote__icon-container">
                <img src={icon} alt={altText} className="keynote__icon" />
            </div>
            <div className="keynote__description-container">
                <h3 className="keynote__title">{title}</h3>
                <p className="keynote__description basic-text">{description}</p>
            </div>
            <div className={decorationClasses}></div>
        </div>
    );
}
