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
            <main>
                {/* Note: videoSource just a placeholder; will not work until api added */}
                <CurrentVideo currentVideo={currentVideo} />
                <section className="content">
                    <section className="content__current-video">
                        <CurrentVideoDetails currentVideo={currentVideo} />
                        <Comments currentVideo={currentVideo} />
                    </section>
                    <NextVideos currentVideo={currentVideo} handleVideoClick={handleVideoClick} />
                </section>
            </main>
        </div>
    );
}

export default App;
