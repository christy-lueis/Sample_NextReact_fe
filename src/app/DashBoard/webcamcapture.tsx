'use client'
import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const webcamRef = useRef(null);

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
    }
  };
  

  return (
    <>
      <Webcam
        audio={true}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={{ width: 1280, height: 720, facingMode: "user" }}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default WebcamCapture;
