import "./NextVideoCard.scss";

function NextVideoCard(props) {
    // const words = props.title.split(" ");
    // console.log(words.length);
    // if (words.length > 7) {
    //     console.log(words.slice(0, 8));
    // }
    return (
        <li className="next-video__item" onClick={() => props.handleVideoClick(props.id)}>
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
