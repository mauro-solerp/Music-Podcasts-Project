import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PodcastList from "./pages/home/PodcastList";
import PodcastDetails from "./pages/podcast-details/PodcastDetails";
import PodcastViewer from "./pages/podcast-viewer/PodcastViewer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PodcastList />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
          <Route
            path="/podcast/:podcastId/episode/:episodeId"
            element={<PodcastViewer />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
