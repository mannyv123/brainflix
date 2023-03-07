import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import videoDetails from "../../data/video-details.json";
import Comments from "../../components/Comments/Comments";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "../../components/CurrentVideoDetails/CurrentVideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import "./VideoPage.scss";

const apiUrl = "https://project-2-api.herokuapp.com";
const apiKey = "d28fb146-1574-4fbd-a40b-9046fc985897";

function VideoPage() {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState({});
    // const [comments, setComments] = useState([]);
    const { videoId } = useParams();

    // const handleVideoClick = (id) => {
    //     const clickedVideo = videos.find((video) => video.id === id);
    //     setCurrentVideo(clickedVideo);
    // };

    useEffect(() => {
        getVideoList();
        console.log("I ran getVideoList on load");
    }, []);

    useEffect(() => {
        if (videoId) {
            getCurrentVideo(videoId);
            console.log("I ran getCurrentVideo when videoId is true");
        } else if (videos.length) {
            getCurrentVideo(videos[0].id);
            console.log(
                "I ran getCurrentVideo when video Id is false but videos has a length: ",
                videos[0].id
            );
        }
    }, [videoId, videos]);

    function getVideoList() {
        axios
            .get(`${apiUrl}/videos?api_key=${apiKey}`)
            .then((response) => {
                setVideos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function getCurrentVideo(videoId) {
        axios
            .get(`${apiUrl}/videos/${videoId}?api_key=${apiKey}`)
            .then((response) => {
                setCurrentVideo(response.data);
                console.log("I got the current video", response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <main>
            {/* Note: videoSource just a placeholder; will not work until api added */}
            <CurrentVideo currentVideo={currentVideo} />
            <section className="content">
                <section className="content__current-video">
                    <CurrentVideoDetails currentVideo={currentVideo} />
                    <Comments currentVideo={currentVideo} />
                </section>
                {/* <NextVideos videos={videos} currentVideo={currentVideo} handleVideoClick={handleVideoClick} /> */}
                <NextVideos videos={videos} currentVideoId={currentVideo.id} />
                {console.log("Here are the videos", videos)}
                {console.log("This is the current video ", currentVideo)}
            </section>
        </main>
    );
}

export default VideoPage;
