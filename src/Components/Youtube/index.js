import React from "react";

const Video = ({ id, width, height }) => {
  const src = `https:/www.youtube.com/embed/${id}`;
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

Video.defaultProps = {
  width: 250,
  height: 150,
};

export default Video;
