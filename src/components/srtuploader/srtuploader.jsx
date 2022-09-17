import "../../../node_modules/video-react/dist/video-react.css";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function SrtUploader() {
  const [value, setValue] = React.useState(0);
  const [url, seturl] = useState("");
  const [videoFilePath, setVideoFilePath] = useState(null);
  const [srtFilePath, setsrtFilePath] = useState(null);
  const [jsonFilePath, setjsonFilePath] = useState(null);
  const [videoFilePathUploaded, setVideoFilePathUploaded] = useState(false);
  const [srtFilePathUploaded, setsrtFilePathUploaded] = useState(false);
  const [jsonFilePathUploaded, setjsonFilePathUploaded] = useState(false);

  const submit = () => {
    console.log(videoFilePath);
    console.log(srtFilePath);
    console.log(jsonFilePath);
  };
  const handleVideoUpload = (event) => {
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
    setVideoFilePathUploaded(true);
  };
  const handlesrtUpload = (event) => {
    setsrtFilePath(URL.createObjectURL(event.target.files[0]));
    setsrtFilePathUploaded(true);
  };
  const handlejsonUpload = (event) => {
    setjsonFilePath(URL.createObjectURL(event.target.files[0]));
    setjsonFilePathUploaded(true);
  };

  return (
    <>
      <div
        style={{
          marginTop: "300px",
          display: "flex",
          flexDirection: "column",
          "justify-content": "center",
          "align-items": "center",
        }}
      >
        <Button
          variant="contained"
          component="label"
          color="primary"
          style={{ marginTop: "30px" }}
        >
          {" "}
          {videoFilePathUploaded ? "" : <AddIcon />}
          {videoFilePathUploaded ? "Uploaded" : "Upload Video"}
          <input type="file" onChange={handleVideoUpload} hidden />
        </Button>
        <Button
          variant="contained"
          component="label"
          color="primary"
          style={{ marginTop: "30px" }}
        >
          {" "}
          {srtFilePathUploaded ? "" : <AddIcon />}
          {srtFilePathUploaded ? "Uploaded" : "Upload srt"}
          <input type="file" onChange={handlesrtUpload} hidden />
        </Button>
        <Button
          variant="contained"
          component="label"
          color="primary"
          style={{ marginTop: "30px" }}
        >
          {" "}
          {jsonFilePathUploaded ? "" : <AddIcon />}
          {jsonFilePathUploaded ? "Uploaded" : "Upload json"}
          <input type="file" onChange={handlejsonUpload} hidden />
        </Button>
        <Button
          variant="outlined"
          style={{ marginTop: "20px" }}
          onClick={submit}
        >
          Submit
        </Button>
      </div>
    </>
  );
}