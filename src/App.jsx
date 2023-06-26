import "./App.css";
import PageHeader from "./components/header/PageHeader";
import PodcastList from "./pages/home/PodcastList";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <PodcastList />
    </div>
  );
}

export default App;
