import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d264b02d67694312876c9c7f08170b4e",
  },
});
