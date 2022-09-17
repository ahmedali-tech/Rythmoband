import logo from "./logo.svg";
import Navbar from "./components/navbar";
import VideoPlayer from "./components/videoPlayer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Rythmoband from "./components/rythmoband/rythmoband";
import SrtUploader from "./components/srtuploader/srtuploader";
import Projectlist from "./components/projectuploader";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<SrtUploader />}></Route>
          <Route exact path="/project" element={<VideoPlayer />}></Route>
          <Route exact path="/projectlist" element={<Projectlist />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
