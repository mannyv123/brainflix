import "./NextVideos.scss";
import { Link } from "react-router-dom";
import NextVideoCard from "../NextVideoCard/NextVideoCard";
import { API_URL } from "../../pages/VideoPage/VideoPage";

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
                            <Link className="next-video__link" to={`/videos/${video.id}`} key={video.id}>
                                <NextVideoCard
                                    thumbnail={`${API_URL}${video.image}`}
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
