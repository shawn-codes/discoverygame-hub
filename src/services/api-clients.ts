import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f0c4fa805cfb414daad33a028e43cd85",
  },
});
