import "./CurrentVideo.scss";

/* Main/Hero Video */
function CurrentVideo(props) {
    return (
        <div className="current-video">
            <video
                className="current-video__player"
                controls
                poster={props.currentVideo.image}
                src={props.currentVideo.video}
            ></video>
        </div>
    );
}

export default CurrentVideo;
