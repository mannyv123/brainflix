// import { useState } from "react";
// import videoList from "../../data/videos.json";
import "./NextVideos.scss";
import { Link } from "react-router-dom";
import NextVideoCard from "../NextVideoCard/NextVideoCard";

/* Next Video Section; renders next videos using NextVideoCard component, 
while excluding currently selected/playing video */
function NextVideos(props) {
    return (
        <section className="next-video">
            <h3 className="next-video__header">Next Videos</h3>
            <ul className="next-video__list">
                {props.videos
                    .filter((video) => video.id !== props.currentVideoId)
                    .map((video) => {
                        return (
                            <Link to={`/${video.id}`} key={video.id}>
                                <NextVideoCard
                                    id={video.id}
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
