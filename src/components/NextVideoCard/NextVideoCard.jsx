import "./NextVideoCard.scss";

function NextVideoCard(props) {
    return (
        <li className="next-video__item" onClick={() => props.handleVideoClick(props.id)}>
            <div className="next-video__image-container">
                <img src={props.thumbnail} alt="next video thumbnail" className="next-video__thumbnail" />
            </div>
            <div className="next-video__details">
                <p className="next-video__title">{props.title}</p>
                <p className="next-video__channel">{props.channel}</p>
            </div>
        </li>
    );
}

export default NextVideoCard;
