import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SearchBar from "../SearchBar";
import CurrentVideo from "../CurrentVideo";
import ListResult from "../ListResult";
import { getAllVideoBySearch } from "../../API/ApiYoutube";

const ContentPage = () => {
  const [listVideo, setListVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  const validateSearch = (e, search) => {
    e.preventDefault();
    getAllVideoBySearch(search).then((res) => {
      setListVideo(() => res);
      setSelectedVideo(() => res[0]);
    });
  };

  const changeCurrentVideo = (video) => {
    console.log("ddd", video);
    setSelectedVideo(() => video);
  };

  return (
    <>
      <Header />
      <div className="content-body">
        <div className="content-video">
          <SearchBar validateSearch={validateSearch} />
          <div className="current-video">
            {selectedVideo && <CurrentVideo video={selectedVideo} />}
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
