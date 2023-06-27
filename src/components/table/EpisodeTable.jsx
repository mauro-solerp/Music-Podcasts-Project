import {
  Card,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import convertDateFormat from "../../utils/DateFormatter";
import convertMillisecondsToTime from "../../utils/convertTime";
import "./EpisodeTable.css";
import { useNavigate, useParams } from "react-router-dom";

const EpisodeTable = (data) => {
  const { podcastId } = useParams();
  let navigate = useNavigate();
  const episodes = data.episodes;
  const viewEpisode = (episode_id) => {
    navigate(`/podcast/${podcastId}/episode/${episode_id}`);
  };
  return (
    <div style={{ width: "100%" }}>
      {episodes.length > 0 ? (
        <div style={{ textAlign: "start" }}>
          <Card style={{ padding: "10px" }}>
            <Typography variant="h5" component="div" noWrap fontWeight={600}>
              Episodes: {episodes.length}
            </Typography>
          </Card>
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 640, marginTop: "10px" }}
          >
            <Table stickyHeader aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {episodes.map((row) => (
                  <TableRow
                    key={row.trackId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">
                      <span className="text-url" onClick={() => viewEpisode(row.trackId)}>{row.trackName}</span>
                    </TableCell>
                    <TableCell align="center">
                      {convertDateFormat(row.releaseDate)}
                    </TableCell>
                    <TableCell align="center">
                      {convertMillisecondsToTime(row.trackTimeMillis)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default EpisodeTable;
