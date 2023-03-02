import { useState } from "react";
import videoList from "../../data/videos.json";
import "./NextVideos.scss";
import NextVideoCard from "../NextVideoCard/NextVideoCard";

function NextVideos(props) {
    return (
        <section className="next-video">
            <h3 className="next-video__header">Next Videos</h3>
            <ul className="next-video__list">
                {videoList.map((video) => {
                    return (
                        <NextVideoCard
                            key={video.id}
                            id={video.id}
                            thumbnail={video.image}
                            title={video.title}
                            channel={video.channel}
                            handleVideoClick={props.handleVideoClick}
                        />
                    );
                })}
            </ul>
        </section>
    );
}

export default NextVideos;
