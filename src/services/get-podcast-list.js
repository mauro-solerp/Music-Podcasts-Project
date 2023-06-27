import axios from "axios";

const fetchPodcasts = async () => {
  try {
    const response = await axios.get(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
    const data = response.data.feed.entry;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchPodcasts;
