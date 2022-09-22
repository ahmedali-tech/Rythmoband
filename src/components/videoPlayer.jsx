import React, { Component } from "react";
import { PrismCode } from "react-prism";
import { Player, ControlBar } from "video-react";
import Button from "@mui/material/Button";
import Prism from "prismjs";
import Rythmoband from "./rythmoband/rythmoband";

const sources = {
  sintelTrailer: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  bunnyTrailer: "http://media.w3.org/2010/05/bunny/trailer.mp4",
  bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
  test: "http://media.w3.org/2010/05/video/movie_300.webm",
};

export default class PlayerControlExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: this.props.source,
      player: { currentTime: " ", playbackRate: " " },
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state,
    });
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
    };
  }
  getCurrentTime() {
    return () => {
      const { player } = this.player.getState();
      console.log(player.currentTime);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.volume = player.volume + steps;
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name],
      });
      this.player.load();
    };
  }

  render() {
    return (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",

          "justify-content": "center",
          "align-items": "center",
        }}
      >
        <Player
          fluid={false}
          width={"55%"}
          height={430}
          ref={(player) => {
            this.player = player;
          }}
          autoPlay
        >
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>
        <div className="py-3" style={{ marginTop: "10px" }}>
          <Button
            onClick={this.play}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            play
          </Button>
          <Button
            onClick={this.pause}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            pause
          </Button>
          <Button
            onClick={this.load}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            load
          </Button>
        </div>
        <div className="pb-3" style={{ marginTop: "10px" }}>
          <Button
            onClick={this.changeCurrentTime(10)}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            currentTime += 10
          </Button>
          <Button
            onClick={this.changeCurrentTime(-10)}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            currentTime -= 10
          </Button>
          <Button
            onClick={this.seek(50)}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            currentTime = 50
          </Button>
        </div>
        <div className="pb-3" style={{ marginTop: "10px" }}>
          <Button
            onClick={this.changePlaybackRateRate(1)}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            playbackRate++
          </Button>
          <Button
            onClick={this.changePlaybackRateRate(-1)}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            playbackRate--
          </Button>
          <Button
            onClick={this.changePlaybackRateRate(0.1)}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            playbackRate+=0.1
          </Button>
          <Button
            onClick={this.changePlaybackRateRate(-0.1)}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            playbackRate-=0.1
          </Button>
        </div>
        <div className="pb-3" style={{ marginTop: "10px" }}>
          <Button
            onClick={this.changeVolume(0.1)}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            volume+=0.1
          </Button>
          <Button
            onClick={this.changeVolume(-0.1)}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            volume-=0.1
          </Button>
          <Button
            onClick={this.setMuted(true)}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            muted=true
          </Button>
          <Button
            onClick={this.setMuted(false)}
            variant="contained"
            component="label"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            muted=false
          </Button>
        </div>
        <Rythmoband
          dialogue={this.props.Dialogues}
          time={this.props.time}
          player={this.state.player}
        />
      </div>
    );
  }
}
