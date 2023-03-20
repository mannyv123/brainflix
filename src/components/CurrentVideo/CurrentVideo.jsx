import "./CurrentVideo.scss";
import { API_URL } from "../../pages/VideoPage/VideoPage";

/* Main/Hero Video */
function CurrentVideo({ currentVideo }) {
    return (
        <section className="current-video">
            <video
                className="current-video__player"
                poster={`${API_URL}${currentVideo.image}`}
                src={`${currentVideo.video}/?api_key=manjot`}
                controls
            ></video>
        </section>
    );
}

export default CurrentVideo;
