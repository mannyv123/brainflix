import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Comments from "../../components/Comments/Comments";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "../../components/CurrentVideoDetails/CurrentVideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import "./VideoPage.scss";

export const apiUrl = "https://project-2-api.herokuapp.com";
export const apiKey = "d28fb146-1574-4fbd-a40b-9046fc985897";

function VideoPage() {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState({});
    const [foundVideo, setFoundVideo] = useState(true);
    const { videoId } = useParams();

    const navigate = useNavigate();

    // Generates list of videos in NextVideo component on load
    useEffect(() => {
        getVideoList();
        console.log("I ran getVideoList on load");
    }, []);

    /*  Determines what video id to use to get current video from the api; 
    if videoId is false, it will load the first video in the videos list; if videoId is true, it will
    send that video id to the api to get the current video*/
    useEffect(() => {
        if (videoId) {
            getCurrentVideo(videoId);
            console.log("I ran getCurrentVideo when videoId is true and the id is ", videoId);
        } else if (videos.length) {
            getCurrentVideo(videos[0].id);
            console.log(
                "I ran getCurrentVideo when video Id is false but videos has a length: ",
                videos[0].id
            );
        }
    }, [videoId, videos, navigate]);

    //Axios call to set state of videos to the data from the api
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

    //Axios call to get current video details from the api based on the video id
    function getCurrentVideo(videoId) {
        axios
            .get(`${apiUrl}/videos/${videoId}?api_key=${apiKey}`)
            .then((response) => {
                setCurrentVideo(response.data);
                console.log("I got the current video", response.data);
            })
            .catch((error) => {
                //need to redirect to main page
                setFoundVideo(false);
                alert("not found");
                console.error(error);
            });
    }

    return (
        <main>
            {/* Note: videoSource just a placeholder; will not work until api added */}
            {/* Ternary operator used that renders error msg if current video cannot be found */}
            {foundVideo ? <CurrentVideo currentVideo={currentVideo} /> : "Video Not Found. Please Try Again"}
            <section className="content">
                <section className="content__current-video">
                    <CurrentVideoDetails currentVideo={currentVideo} />
                    <Comments currentVideo={currentVideo} getCurrentVideo={getCurrentVideo} />
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
