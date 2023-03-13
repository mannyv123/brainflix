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
    }, []);

    /*  Determines what video id to use to get current video from the api; 
    if videoId is false, it will load the first video in the videos list; if videoId is true, it will
    send that video id to the api to get the current video*/
    useEffect(() => {
        if (videoId) {
            getCurrentVideo(videoId);
        } else if (videos.length) {
            getCurrentVideo(videos[0].id);
        }
    }, [videoId, videos]);

    /* Redirects user if the video id for the current video cannot be found */
    useEffect(() => {
        let timer = "";
        if (!foundVideo) {
            timer = setTimeout(() => {
                navigate("/");
                setFoundVideo(true);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [foundVideo, navigate]);

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

    /*Axios call to get current video details from the api based on the video id; 
    also resets foundVideo to true when the api call is successful*/
    function getCurrentVideo(videoId) {
        axios
            .get(`${apiUrl}/videos/${videoId}?api_key=${apiKey}`)
            .then((response) => {
                setFoundVideo(true);
                setCurrentVideo(response.data);
            })
            .catch((error) => {
                setFoundVideo(false);
                console.error(error);
            });
    }

    return (
        <main>
            {/* Note: videoSource just a placeholder; will not work until api added */}
            {/* Ternary operator used that renders error msg if current video cannot be found */}
            {foundVideo ? (
                <CurrentVideo currentVideo={currentVideo} />
            ) : (
                <p className="video-error">Video Not Found. Redirecting to main page...</p>
            )}
            <section className="content">
                <section className="content__current-video">
                    <CurrentVideoDetails currentVideo={currentVideo} />
                    <Comments currentVideo={currentVideo} getCurrentVideo={getCurrentVideo} />
                </section>
                <NextVideos videos={videos} currentVideoId={currentVideo.id} />
            </section>
        </main>
    );
}

export default VideoPage;
