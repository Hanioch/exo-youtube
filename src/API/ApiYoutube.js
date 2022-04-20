import axios from "axios";

const APIKEY = "key=AIzaSyDrOfdNceN-ZbqisUUMgYBCFP5EH9KtHHg";
const ENDPOINT = "https://youtube.googleapis.com/youtube/v3";
const ENDPOINTSEARCH = `${ENDPOINT}/search?part=id%2Csnippet&type=video&maxResults=10`;
const ENDPOINTVIDEO = `${ENDPOINT}/videos?part=snippet`;

export const getAllVideoBySearch = (search) => {
  let response;
  try {
    response = axios
      .get(`${ENDPOINTSEARCH}&q=${search}&${APIKEY}`)
      .then((result) => {
        return result.data.items;
      });
  } catch (error) {
    console.log(error);
    response = [];
  }
  return response;
};

export const getAllDescriptionForVideo = (idVideo) => {
  // https://www.googleapis.com/youtube/v3/videos?part=snippet&id={VIDEO_ID}&key={YOUR_API_KEY}
  let response;
  try {
    response = axios
      .get(`${ENDPOINTVIDEO}&id=${idVideo}&${APIKEY}`)
      .then((result) => {
        return result.data.items[0].snippet.description;
      });
  } catch (error) {
    console.log(error);
    response = "";
  }
  return response;
};
