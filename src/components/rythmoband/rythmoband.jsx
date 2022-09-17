import "../../../node_modules/video-react/dist/video-react.css";
import React, { Component } from "react";
import { PrismCode } from "react-prism";
import { Player, ControlBar } from "video-react";
import { Button } from "reactstrap";

export default function Rythmoband() {
  const [value, setValue] = React.useState(0);

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
      </div>
    </>
  );
}
