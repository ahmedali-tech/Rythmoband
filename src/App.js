import logo from "./logo.svg";
import Navbar from "./components/navbar";
import VideoPlayer from "./components/videoPlayer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Rythmoband from "./components/rythmoband/rythmoband";
import SrtUploader from "./components/srtuploader/srtuploader";
import Projectlist from "./components/projectuploader";
import "./App.css";
import { useState, createContext } from "react";

export const DialoguesContext = createContext();

function App() {
  const [Dialogues, setDialogues] = useState("ok");
  const [Time, setTime] = useState(" ");
  const [source, setsource] = useState(" ");
  const [json, setjson] = useState(" ");
  return (
    <DialoguesContext.Provider
      value={{
        Dialogues,
        setDialogues,
        Time,
        setTime,
        source,
        setsource,
        json,
        setjson,
      }}
    >
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<SrtUploader />}></Route>
            <Route
              exact
              path="/project"
              element={
                <VideoPlayer
                  Dialogues={Dialogues}
                  time={Time}
                  source={source}
                />
              }
            ></Route>
            <Route exact path="/projectlist" element={<Projectlist />}></Route>
          </Routes>
        </div>
      </Router>
    </DialoguesContext.Provider>
  );
}

export default App;
