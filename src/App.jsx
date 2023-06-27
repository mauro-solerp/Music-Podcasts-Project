import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PodcastList from "./pages/home/PodcastList";
import PodcastDetails from "./pages/podcast-details/PodcastDetails";
import { PodcastProvider } from "./hooks/PodcastContext";

function App() {
  return (
    <div className="App">
      <PodcastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PodcastList />} />
            <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
          </Routes>
        </BrowserRouter>
      </PodcastProvider>
    </div>
  );
}

export default App;
