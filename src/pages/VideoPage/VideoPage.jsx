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
    const { videoId } = useParams();

    // const handleVideoClick = (id) => {
    //     const clickedVideo = videos.find((video) => video.id === id);
    //     setCurrentVideo(clickedVideo);
    // };

    useEffect(() => {
        getVideoList();
    }, []);

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

    return (
        <main>
            {/* Note: videoSource just a placeholder; will not work until api added */}
            {/* <CurrentVideo currentVideo={currentVideo} /> */}
            <section className="content">
                <section className="content__current-video">
                    {/* <CurrentVideoDetails currentVideo={currentVideo} /> */}
                    {/* <Comments currentVideo={currentVideo} /> */}
                </section>
                {/* <NextVideos videos={videos} currentVideo={currentVideo} handleVideoClick={handleVideoClick} /> */}
                <NextVideos videos={videos} />
                {console.log(videos)}
            </section>
        </main>
    );
}

export default VideoPage;
