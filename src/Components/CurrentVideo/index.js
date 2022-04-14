import "./style.css";
import Youtube from "../Youtube";

const CurrentVideo = ({ video }) => {
  const { channelTitle, description, title } = video.snippet;
  return (
    <>
      <Youtube id={video.id.videoId} width={900} height={520} />
      <div className="video-info">
        <h2>{title}</h2>
        <h3>{channelTitle}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default CurrentVideo;
