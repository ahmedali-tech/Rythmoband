import "../../../node_modules/video-react/dist/video-react.css";
import React, { Component, useState, useEffect, useRef } from "react";
import { PrismCode } from "react-prism";
import { Player, ControlBar } from "video-react";
import { Button } from "reactstrap";
import { getSub_Millis } from "../../services/srtreader";

export default function Rythmoband(props) {
  const initialPosition = useRef("55%");

  const [number, setnumber] = useState(0);
  const [timerCheck, setTimerCheck] = useState(true);
  const [moverNumber, setMoverNumber] = useState(0.001);
  const [currentTime, setCurrentTime] = useState(0);

  const textMover = () => {
    let x = parseFloat(initialPosition.current);
    let start = getSub_Millis(props.time[number][0]);
    let end = getSub_Millis(props.time[number][1]);
    console.log(initialPosition.current);

    let timeToMove = start - end;
    setMoverNumber((timeToMove / 2500) * props.player.playbackRate);

    setCurrentTime(props.time.currentTime);
    x = x + moverNumber;
    let y = `${x}%`;
    initialPosition.current = y;
  };
  setTimeout(() => {
    textMover();
    timercheck();
    backChecker();
  }, 0.0000001);
  const timercheck = () => {
    if (
      getSub_Millis(props.time[number][1]) - props.player.currentTime * 1000 <
      1
    ) {
      initialPosition.current = "30%";
      setnumber(number + 1);
    }
  };
  const backChecker = () => {
    for (let index = 0; index < props.time.length; index++) {
      if (
        getSub_Millis(props.time[index][1]) > props.player.currentTime * 1000 &&
        getSub_Millis(props.time[index][0]) < props.player.currentTime * 1000
      ) {
        setnumber(index);
      }
    }
  };
  return (
    <>
      <div
        style={{
          width: window.innerWidth,
          background: "#FF8232",
          marginTop: "20px",
          height: "75px",
          position: "relative",
          border: "5px solid black",
        }}
      >
        <div
          style={{
            width: "5px",
            background: "red",
            marginTop: "20px",
            height: "75px",
            position: "absolute",
            top: "-25%",
            left: "25%",
          }}
        ></div>

        <strong
          style={{
            position: "absolute",
            left: initialPosition.current,
            top: "25%",
            fontSize: "2rem",
          }}
        >
          {props.dialogue[number]}
        </strong>
      </div>
    </>
  );
}
