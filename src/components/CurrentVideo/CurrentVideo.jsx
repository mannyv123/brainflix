import "./CurrentVideo.scss";

/* Main/Hero Video */
function CurrentVideo({ currentVideo }) {
    return (
        <div className="current-video">
            <video
                className="current-video__player"
                controls
                poster={currentVideo.image}
                src={currentVideo.video}
            ></video>
        </div>
    );
}

export default CurrentVideo;
