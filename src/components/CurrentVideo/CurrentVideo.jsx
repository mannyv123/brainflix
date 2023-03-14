import "./CurrentVideo.scss";
import { API_URL } from "../../pages/VideoPage/VideoPage";

/* Main/Hero Video */
function CurrentVideo({ currentVideo }) {
    return (
        <div className="current-video">
            <video
                className="current-video__player"
                controls
                poster={`${API_URL}${currentVideo.image}`}
                src={currentVideo.video}
            ></video>
        </div>
    );
}

export default CurrentVideo;
