import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closetoggle } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closetoggle());
  }, []);
  return (
    <div className="flex flex-col">
      <div className="px-12 m-3">
        <iframe
          width="700"
          height="400"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1>Watch Page</h1>
      </div>

      <CommentContainer />
    </div>
  );
};

export default WatchPage;
