import React from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./PageHeader.css";

const PageHeader = () => {
  let navigate = useNavigate(); 
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div style={{ width: "100%" }}>
      <div style={{ textAlign: "initial" }} onClick={handleClick} >
        <Typography variant="h5" component="div" noWrap>
          <span className="header-text">Podcaster</span>
        </Typography>
      </div>
    </div>
  );
};

export default PageHeader;
