import { CircularProgress } from "@mui/material";

const LoadingIndicator = () => {
  return (
    <div style={{ position: "fixed", top: 15, right: 0, padding: "10px" }}>
      <CircularProgress color="primary" size={20} />
    </div>
  );
};

export default LoadingIndicator;