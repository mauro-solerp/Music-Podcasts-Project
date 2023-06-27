import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import PodcastCard from "../../components/cards/podcast-card/PodcastCard";
import "./PodcastList.css";
import FilterLabel from "../../components/label/FilterLabel";
import PageHeader from "../../components/header/PageHeader";
import PodcastContext from "../../hooks/PodcastContext";

const PodcastList = () => {
  const podcasts = useContext(PodcastContext); // Accede a los datos de los podcasts desde el contexto
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  useEffect(() => {
    setFilteredPodcasts(podcasts); // Actualiza los podcasts filtrados con los datos del contexto
  }, [podcasts]);

  return (
    <div>
      <div>
        <PageHeader />
      </div>
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
