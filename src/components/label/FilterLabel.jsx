import React, { useEffect, useState } from "react";
import { Chip, Grid, TextField } from "@mui/material";

const FilterLabel = ({ podcasts, setFilteredPodcasts }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredCount, setFilteredCount] = useState(podcasts.length);

  useEffect(() => {
    const filterPodcasts = () => {
      const filterText = searchFilter.toLowerCase();
      const filteredPodcasts = podcasts.filter((podcast) => {
        const author = podcast["im:artist"].label.toLowerCase();
        const title = podcast["im:name"].label.toLowerCase();
        return author.includes(filterText) || title.includes(filterText);
      });

      setFilteredPodcasts(filteredPodcasts);
      setFilteredCount(filteredPodcasts.length);
    };

    filterPodcasts();
  }, [searchFilter, podcasts, setFilteredPodcasts]);

  const handleSearchChange = (event) => {
    setSearchFilter(event.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Grid container>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div style={{ flex: 1, marginRight: "5px" }}>
            <Chip label={filteredCount} color="primary" />
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <TextField
            variant="outlined"
            label="Filter podcasts..."
            fullWidth
            value={searchFilter}
            onChange={handleSearchChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default FilterLabel;