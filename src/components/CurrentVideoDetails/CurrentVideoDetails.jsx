import "./CurrentVideoDetails.scss";
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";

function CurrentVideoDetails(props) {
    const formattedDate = new Date(props.currentVideo.timestamp).toLocaleDateString();

    return (
        <section className="video">
            <h1 className="video__title">{props.currentVideo.title}</h1>
            <div className="video__details">
                <div className="video__post-info">
                    <p className="video__channel">By {props.currentVideo.channel}</p>
                    <p className="video__timestamp">{formattedDate}</p>
                </div>
                <div className="video__analytics">
                    <div className="video__views">
                        <img src={viewsIcon} alt="views icon" className="video__views-icon" />
                        <p className="video__views-count">{props.currentVideo.views}</p>
                    </div>
                    <div className="video__likes">
                        <img src={likesIcon} alt="likes icon" className="video__likes-icon" />
                        <p className="video__likes-count">{props.currentVideo.likes}</p>
                    </div>
                </div>
            </div>
            <p className="video__description">{props.currentVideo.description}</p>
        </section>
    );
}

export default CurrentVideoDetails;
