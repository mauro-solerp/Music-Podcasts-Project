import { Card } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import "./PodcastCard.css";

const PodcastCard = (podcast) => {
  const podcastData = podcast.data;
  const author = podcastData["im:artist"].label;
  const title = podcastData["im:name"].label;
  const image = podcastData["im:image"][2].label;

  return (
    <div >
      <Card style={{ padding: "5px"}} className="podcast-card">
        <img
          className="podcast-image"
          src={image}
          alt="Descripción de la imagen"
        />
        <div className="podcast-details">
          <Typography variant="h5" component="div" noWrap>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: {author}
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default PodcastCard;
