import React from "react";
import fetchPodcasts from "../../services/get-podcast-list";
import { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import PodcastCard from "../../components/cards/PodcastCard";
import "./PodcastList.css";
import FilterLabel from "../../components/label/FilterLabel";

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPodcasts();
        setPodcasts(data);
        setFilteredPodcasts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "end" }}>
        {podcasts.length > 0 ? (
          <FilterLabel
            podcasts={podcasts}
            setFilteredPodcasts={setFilteredPodcasts}
          />
        ) : (
          <CircularProgress color="primary"></CircularProgress>
        )}
      </div>
      <div className="podcast-list-container">
        {podcasts.length > 0 ? (
          <Grid container spacing={5}>
            {filteredPodcasts.map((podcast) => {
              return (
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  key={podcast.id.attributes["im:id"]}
                >
                  <PodcastCard data={podcast} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <div>
            <CircularProgress color="primary"></CircularProgress>
          </div>
        )}
      </div>
    </div>
  );
};

export default PodcastList;
