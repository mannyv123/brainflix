import "./CurrentVideo.scss";

function CurrentVideo(props) {
    return (
        <video className="current-video" controls poster={props.thumbnail} src={props.videoSource}></video>
    );
}

export default CurrentVideo;
