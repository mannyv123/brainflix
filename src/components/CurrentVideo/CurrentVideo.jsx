import "./CurrentVideo.scss";
import { API_URL } from "../../pages/VideoPage/VideoPage";
// import { useRef } from "react";

/* Main/Hero Video */
function CurrentVideo({ currentVideo }) {
    // const videoRef = useRef(null);

    return (
        <figure className="current-video">
            <video
                className="current-video__player"
                poster={`${API_URL}${currentVideo.image}`}
                src={`${currentVideo.video}/?api_key=manjot`}
                controls
            ></video>
            {/* <ul id="video-controls" className="current-video__controls">
                <li>
                    <button id="play" type="button">
                        
                    </button>
                </li>
                <li>
                    <button id="stop" type="button">
                        Stop
                    </button>
                </li>
                <li className="current-video__progress">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </li>
                <li>
                    <button id="mute" type="button">
                        Mute/Unmute
                    </button>
                </li>
                <li>
                    <button id="volinc" type="button">
                        Vol+
                    </button>
                </li>
                <li>
                    <button id="voldec" type="button">
                        Vol-
                    </button>
                </li>
                <li>
                    <button id="fs" type="button">
                        Fullscreen
                    </button>
                </li>
            </ul> */}
        </figure>
    );
}

export default CurrentVideo;
