import SingleVideoInList from "../SingleVideoInList";
import "./style.css";
const ListResult = ({ changeCurrentVideo, listVideo, idSelected }) => {
  const videos = listVideo.map((video) => (
    <SingleVideoInList
      key={video.id.videoId}
      video={video}
      className={
        idSelected === video.id.videoId ? "is-selected" : "not-selected"
      }
      changeCurrentVideo={changeCurrentVideo}
    />
  ));

  return (
    <>
      <ul className="list-video">{videos}</ul>
    </>
  );
};

export default ListResult;
