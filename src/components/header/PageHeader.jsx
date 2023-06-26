import React from "react";
import Typography from "@mui/material/Typography";
import FilterLabel from "../label/FilterLabel";

const PageHeader = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ textAlign: "initial" }}>
        <Typography variant="h5" component="div" noWrap>
          Podcaster
        </Typography>
        <div style={{ textAlign: "end" }}>
          <FilterLabel />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
