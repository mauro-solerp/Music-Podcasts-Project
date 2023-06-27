import axios from "axios";

const fetchPodcastDetails = async (podcastId) => {
  const storageKey = `podcast_${podcastId}`;
  const lastFetchTime = localStorage.getItem(storageKey);
  
  try {
    if (lastFetchTime) {
      const currentTime = Date.now();
      const oneDay = 24 * 60 * 60 * 1000; 

      if (currentTime - lastFetchTime < oneDay) {
        const storedData = JSON.parse(localStorage.getItem(storageKey + '_data'));
        const episodes = storedData.episodes;
        episodes.shift();
        return episodes;
      }
    }

    const response = await axios.get(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${podcastId}`
      )}`
    );
    const collectionId = JSON.parse(response.data.contents).results[0].collectionId;
    const episodes = await fetchPodcastEpisodes(collectionId);
    episodes.shift();

    const dataToStore = {
      episodes,
      timestamp: Date.now()
    };

    localStorage.setItem(storageKey, dataToStore.timestamp);
    localStorage.setItem(storageKey + '_data', JSON.stringify(dataToStore));

    return episodes;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchPodcastEpisodes = async (collectionId) => {
  try {
    const response = await axios.get(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${collectionId}&entity=podcastEpisode`
      )}`
    );
    const data = JSON.parse(response.data.contents).results;

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchPodcastDetails;