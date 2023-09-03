import React, { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
// import VideoCard from "./VideoCard";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const josn = await data.json();
    setVideo(josn.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
