import "./NextVideoCard.scss";

/* Component to be used for each video in next video list */
function NextVideoCard(props) {
    return (
        <li className="next-video__item">
            <div className="next-video__image-container">
                <img
                    src={props.thumbnail}
                    alt={`Video called ${props.title}`}
                    className="next-video__thumbnail"
                />
            </div>
            <div className="next-video__details">
                <p className="next-video__title">{props.title}</p>
                <p className="next-video__channel">{props.channel}</p>
            </div>
        </li>
    );
}

export default NextVideoCard;
