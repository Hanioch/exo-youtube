import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SearchBar from "../SearchBar";
import CurrentVideo from "../CurrentVideo";
import ListResult from "../ListResult";
import {
  getAllDescriptionForVideo,
  getAllVideoBySearch,
} from "../../API/ApiYoutube";

const ContentPage = () => {
  const [listVideo, setListVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [description, setDescription] = useState(4);

  const validateSearch = async (e, search) => {
    e.preventDefault();
    const res = await getAllVideoBySearch(search);
    setListVideo(() => res);
    setSelectedVideo(() => res[0]);

    changeDescription(res[0]);
  };

  const changeCurrentVideo = async (video) => {
    setSelectedVideo(() => video);
    changeDescription(video);
  };

  const changeDescription = async (video) => {
    const newDescription = await getAllDescriptionForVideo(video.id.videoId);
    setDescription(newDescription);
  };

  return (
    <>
      <Header />
      <div className="content-body">
        <div className="content-video">
          <SearchBar validateSearch={validateSearch} />
          <div className="current-video">
            {selectedVideo && (
              <CurrentVideo video={selectedVideo} description={description} />
            )}
          </div>
        </div>
        <div className="list-result">
          {selectedVideo && (
            <ListResult
              listVideo={listVideo}
              idSelected={selectedVideo.id.videoId}
              changeCurrentVideo={changeCurrentVideo}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContentPage;
