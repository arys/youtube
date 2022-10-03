import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos }) {
  const list = videos.map(video => (
    <VideoItem key={video.id.videoId} video={video} />
  ))
  return (
    <div className="ui relaxed divided list">
      {list}
    </div>
  )
}

export default VideoList;