import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
// import { closetoggle } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [videoDetail, setVideoDetail] = useState();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const getVideoDetail = async () => {
    const videoDataUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyBAueYoVRWFRROzse_mSFN2nBwhV7j5oto&part=snippet,contentDetails,statistics,status`;
    const videoData = await fetch(videoDataUrl);
    const videoDataJson = await videoData.json();
    setVideoDetail(videoDataJson.items[0]);
  };

  useEffect(() => {
    getVideoDetail();
  }, []);

  return (
    <div className="flex flex-wrap float-left">
      <div className="px-4">
        <iframe
          width="700"
          height="400"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* <h1>{JSON.stringify(videoDetail.snippet)}</h1> */}
      </div>

      <CommentContainer />
    </div>
  );
};

export default WatchPage;
