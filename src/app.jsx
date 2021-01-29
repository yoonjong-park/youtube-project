import React, { useState, useEffect } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]); //null video

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyB8jyrbmlHy1kxkQ-CBRaJnrneA0fmcEew",
      requestOptions,
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log("error", error));
  }, []); //mount가 되었을 때만 작동

  return <VideoList videos={videos} />;
}

export default App;
