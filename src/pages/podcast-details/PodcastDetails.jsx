import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchPodcastDetails from "../../services/get-details";
import PageHeader from "../../components/header/PageHeader";
import EpisodeTable from "../../components/table/EpisodeTable";
import CardDetails from "../../components/cards/podcast-details/CardDetails";
import { Grid } from "@mui/material";
import "./PodcastDetails.css";

const PodcastDetails = () => {
  const { podcastId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPodcastDetails(podcastId);
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [podcastId]);
  return (
    <div >
        <PageHeader />
      <Grid container spacing={2} style={{marginTop: "30px"}} > 
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} >
          <CardDetails id={podcastId} />
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
          <EpisodeTable episodes={details} />
        </Grid>
      </Grid>
    </div>
  );
};

export default PodcastDetails;
