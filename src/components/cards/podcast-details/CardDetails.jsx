import { Card, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import fetchPodcasts from "../../../services/get-podcast-list";

const CardDetails = (idPodcast) => {
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    fetchPodcastData(idPodcast.id);
  }, [idPodcast]);

  const fetchPodcastData = async (podcastId) => {
    try {
      const response = await fetchPodcasts();
      const podcastData = response.find(
        (podcast) => podcast.id.attributes["im:id"] === podcastId
      );
      setPodcast(podcastData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {podcast ? (
        <Card style={{ padding: "5px", maxWidth: "500px" }}>
          <img
            style={{ marginTop: "10px" }}
            src={podcast["im:image"][2].label}
            alt="Descripción de la imagen"
          />
          <Divider
            variant="middle"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />
          <div style={{ textAlign: "start", padding: "10px" }}>
            <Typography variant="h6" component="div" noWrap fontWeight={600}>
              {podcast["im:name"].label}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              By: {podcast["im:artist"].label}
            </Typography>
            <Divider
              variant="middle"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            />
            <Typography variant="h6" component="div" noWrap fontWeight={600}>
              description:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {podcast["summary"].label}
            </Typography>
          </div>
        </Card>
      ) : null}
    </div>
  );
};

export default CardDetails;
