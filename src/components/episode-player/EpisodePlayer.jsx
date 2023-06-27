import { Card, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchPodcastDetails from "../../services/get-details";
import { useParams } from "react-router-dom";

const EpisodePlayer = () => {
  const { podcastId, episodeId } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPodcastDetails(podcastId);
        setEpisodes(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [podcastId]);

  useEffect(() => {
    if (episodes.length > 0) {
      const episode = episodes.find((ep) => ep.trackId === parseInt(episodeId));
      setCurrentEpisode(episode);
    }
  }, [episodes, episodeId]);

  return (
    <div>
      <Card style={{ textAlign: "start", padding: "15px" }}>
        <Typography variant="h6" component="div" noWrap fontWeight={600}>
          {currentEpisode ? currentEpisode.trackName : "no title"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {currentEpisode ? currentEpisode.description : "no description"}
        </Typography>
        <Divider
          variant="middle"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
        {currentEpisode ? (
          <audio controls style={{ width: "100%" }}>
            <source src={currentEpisode.episodeUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        ) : null}
      </Card>
    </div>
  );
};

export default EpisodePlayer;
