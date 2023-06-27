import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PodcastList from "./pages/home/PodcastList";
import PodcastDetails from "./pages/podcast-details/PodcastDetails";
import PodcastViewer from "./pages/podcast-viewer/PodcastViewer";
import LoadingIndicator from "./components/loading-indicator/LoadingIndicator";

function App() {
  
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      {isLoading ? <LoadingIndicator /> : null}
        <Routes>
          <Route path="/" element={<PodcastList setIsLoading={setIsLoading} />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetails setIsLoading={setIsLoading}/>} />
          <Route
            path="/podcast/:podcastId/episode/:episodeId"
            element={<PodcastViewer setIsLoading={setIsLoading}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
