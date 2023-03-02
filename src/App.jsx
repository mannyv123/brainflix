import { useState } from "react";
import "./App.scss";
import videoDetails from "./data/video-details.json";
import Comments from "./components/Comments/Comments";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "./components/CurrentVideoDetails/CurrentVideoDetails";
import Header from "./components/Header/Header";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
    const [videos] = useState(videoDetails);
    const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

    const handleVideoClick = (id) => {
        const clickedVideo = videos.find((video) => video.id === id);
        setCurrentVideo(clickedVideo);
    };

    return (
        <div className="App">
            <Header />
            {/* Note: videoSource just a placeholder; will not work until api added */}
            <CurrentVideo currentVideo={currentVideo} />
            <CurrentVideoDetails currentVideo={currentVideo} />
            <Comments />
            <NextVideos currentVideo={currentVideo} handleVideoClick={handleVideoClick} />
        </div>
    );
}

export default App;
