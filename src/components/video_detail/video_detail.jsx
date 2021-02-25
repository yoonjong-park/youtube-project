import React from "react";
import styles from "./video_detail.module.css";

const videoSource = "https://www.youtube.com/watch?v=60g72d4Nqss";

const VideoDetail = ({ video }) => {
  return (
    <div>
      <iframe
        className={styles.video}
        width="98%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h1>{video.snippet.title}</h1>
    </div>
  );
};

export default VideoDetail;
