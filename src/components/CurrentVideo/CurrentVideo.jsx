import "./CurrentVideo.scss";

function CurrentVideo(props) {
    return (
        <video
            className="current-video"
            controls
            poster={props.currentVideo.image}
            src={props.currentVideo.video}
        ></video>
    );
}

export default CurrentVideo;
