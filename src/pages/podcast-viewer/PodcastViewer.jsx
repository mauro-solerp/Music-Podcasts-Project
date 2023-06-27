import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/header/PageHeader";
import CardDetails from "../../components/cards/podcast-details/CardDetails";
import { Grid } from "@mui/material";
import EpisodePlayer from "../../components/episode-player/EpisodePlayer";

const PodcastViewer = ({ setIsLoading }) => {
  const { podcastId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [setIsLoading]);
  return (
    <div>
      <PageHeader />
      <Grid container spacing={2} style={{ marginTop: "30px" }}>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <CardDetails id={podcastId} />
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <EpisodePlayer />
        </Grid>
      </Grid>
    </div>
  );
};

export default PodcastViewer;
