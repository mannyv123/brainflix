import "./NextVideos.scss";
import { Link } from "react-router-dom";
import NextVideoCard from "../NextVideoCard/NextVideoCard";

/* Next Video Section; renders next videos using NextVideoCard component, 
while excluding currently selected/playing video */
function NextVideos({ videos, currentVideoId }) {
    return (
        <section className="next-video">
            <h3 className="next-video__header">Next Videos</h3>
            <ul className="next-video__list">
                {videos
                    .filter((video) => video.id !== currentVideoId)
                    .map((video) => {
                        return (
                            <Link to={`/videos/${video.id}`} key={video.id}>
                                <NextVideoCard
                                    thumbnail={video.image}
                                    title={video.title}
                                    channel={video.channel}
                                />
                            </Link>
                        );
                    })}
            </ul>
        </section>
    );
}

export default NextVideos;
