import "./CurrentVideoDetails.scss";
import timeAgo from "../../utils/timeAgo";
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";

/* Displays details of the currently selected video */
function CurrentVideoDetails({ currentVideo }) {
    const timeSincePost = timeAgo(new Date(Date.now()), currentVideo.timestamp);

    return (
        <section className="video">
            <h1 className="video__title">{currentVideo.title}</h1>
            <div className="video__details">
                <div className="video__post-info">
                    <p className="video__channel">By {currentVideo.channel}</p>
                    <p className="video__timestamp">{`Posted ${timeSincePost}`}</p>
                </div>
                <div className="video__analytics">
                    <div className="video__views">
                        <img src={viewsIcon} alt="views icon" className="video__views-icon" />
                        <p className="video__views-count">{currentVideo.views}</p>
                    </div>
                    <div className="video__likes">
                        <img src={likesIcon} alt="likes icon" className="video__likes-icon" />
                        <p className="video__likes-count">{currentVideo.likes}</p>
                    </div>
                </div>
            </div>
            <p className="video__description">{currentVideo.description}</p>
        </section>
    );
}

export default CurrentVideoDetails;
