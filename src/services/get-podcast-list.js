import axios from "axios";

const fetchPodcasts = async () => {
  try {
    const lastRequestTime = localStorage.getItem("podcastsLastRequestTime");
    const currentTime = new Date().getTime();

    if (!lastRequestTime || currentTime - lastRequestTime > 24 * 60 * 60 * 1000) {
      const response = await axios.get(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
      );
      const data = response.data.feed.entry;

      localStorage.setItem("podcastsData", JSON.stringify(data));
      localStorage.setItem("podcastsLastRequestTime", currentTime);
    }

    const storedData = localStorage.getItem("podcastsData");
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchPodcasts;
