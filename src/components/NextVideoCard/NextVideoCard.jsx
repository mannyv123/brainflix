import "./NextVideoCard.scss";

/* Component to be used for each video in next video list */
function NextVideoCard({ thumbnail, title, channel }) {
    return (
        <li className="next-video__item">
            <div className="next-video__image-container">
                <img src={thumbnail} alt={`Video called ${title}`} className="next-video__thumbnail" />
            </div>
            <div className="next-video__details">
                <p className="next-video__title">{title}</p>
                <p>{channel}</p>
            </div>
        </li>
    );
}

export default NextVideoCard;
