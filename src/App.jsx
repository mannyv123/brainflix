import "./App.scss";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "./components/CurrentVideoDetails/CurrentVideoDetails";
import Header from "./components/Header/Header";
import NextVideos from "./components/NextVideos/NextVideos";

// Temp Data
const tempDataArray = require("./data/video-details.json");
const tempDataArrayVidList = require("./data/videos.json");

function App() {
    //temp current video
    const currentVideo = tempDataArray[0];

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
            <NextVideos videos={tempDataArrayVidList} />
        </div>
    );
}

export default App;
