import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const PodcastContext = createContext();

export const PodcastProvider = ({ children }) => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await axios.get(
          "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
        );
        const data = response.data.feed.entry;
        setPodcasts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPodcasts();
  }, []);

  return (
    <PodcastContext.Provider value={podcasts}>
      {children}
    </PodcastContext.Provider>
  );
};

export default PodcastContext;