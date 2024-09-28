import React from "react";
import Webcam from "react-webcam";

const MyWebcamComponent = () => {
    const webcamRef = React.useRef(null);
      const capture = () => {
        if (webcamRef.current) {
    const imageSrc = webcamRef.current.getScreenshot();
        }
    // Handle the captured image (and audio) as needed
  };
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user", // Use the front-facing camera
  };
  return (
    <div>
      <Webcam
  audio={true}
  height={720}
  ref={webcamRef}
  screenshotFormat="image/jpeg"
  width={1280}
  videoConstraints={videoConstraints}
/>
<button onClick={capture}>Capture photo</button>
    </div>
  );
};

export default MyWebcamComponent;