import React from "react";

export default function Featured() {
  return (
    <>
      <div className="text-center my-5 text-4xl font-sans font-bold ">
        Featured Videos
      </div>
      <div className="flex justify-center my-8 space-x-3">
        <div>
          <video src="/video2.mp4" type="video/mp4" autoPlay muted loop></video>
        </div>
        <br />
        <div>
          <video
            src="/featured/video1.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </>
  );
}
