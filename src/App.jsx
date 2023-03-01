import "./App.scss";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo";
import CurrentVideoDetails from "./components/CurrentVideoDetails/CurrentVideoDetails";
import Header from "./components/Header/Header";

// Temp Data
const tempDataArray = require("./data/video-details.json");

function App() {
    //temp current video
    const currentVideo = tempDataArray[0];

    return (
        <div className="App">
            <Header />
            <CurrentVideo />
            <CurrentVideoDetails
                title={currentVideo.title}
                channel={currentVideo.channel}
                timestamp={currentVideo.timestamp}
                views={currentVideo.views}
                likes={currentVideo.likes}
                description={currentVideo.description}
            />
        </div>
    );
}

export default App;
