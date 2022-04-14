import axios from "axios";

const APIKEY = "key=AIzaSyDrOfdNceN-ZbqisUUMgYBCFP5EH9KtHHg";
const ENDPOINT =
  "https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&type=video&maxResults=10";

export const getAllVideoBySearch = (search) => {
  let response;
  try {
    response = axios.get(`${ENDPOINT}&q=${search}&${APIKEY}`).then((result) => {
      console.log(result.data);
      return result.data.items;
    });
  } catch (error) {
    console.log(error);

    response = [];
  }
  return response;
};
