import { useState } from "react";
import "./App.scss";
import videoDetails from "./data/video-details.json";
import Comments from "./components/Comments/Comments";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "./components/CurrentVideoDetails/CurrentVideoDetails";
import Header from "./components/Header/Header";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
    const [videos, setVideos] = useState(videoDetails);
    const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

    const handleVideoClick = (id) => {
        // console.log("clicked", id);
        const clickedVideo = videos.find((video) => video.id === id);
        // console.log(clickedVideo);
        setCurrentVideo(clickedVideo);
    };

    return (
        <div className="App">
            <Header />
            {/* Note: videoSource just a placeholder; will not work until api added */}
            <CurrentVideo thumbnail={currentVideo.image} videoSource={currentVideo.video} />
            <CurrentVideoDetails
                title={currentVideo.title}
                channel={currentVideo.channel}
                timestamp={currentVideo.timestamp}
                views={currentVideo.views}
                likes={currentVideo.likes}
                description={currentVideo.description}
            />
            <Comments />
            {/* <NextVideos videos={videos} handleVideoClick={handleVideoClick} /> */}
            <NextVideos handleVideoClick={handleVideoClick} />
        </div>
    );
}

export default App;
