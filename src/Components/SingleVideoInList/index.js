import "./style.css";
const SingleVideoInList = ({ video, changeCurrentVideo, className }) => {
  const { description, title, thumbnails } = video.snippet;

  return (
    <div
      onClick={() => {
        changeCurrentVideo(video);
      }}
      className={`${className} single-video-in-list`}
    >
      <img alt="title" src={thumbnails.medium.url} />

      <div>{title}</div>
      <div>{description}</div>
      <hr />
    </div>
  );
};

export default SingleVideoInList;
