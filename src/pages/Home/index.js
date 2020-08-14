import React from "react";
import { Player } from "video-react";
import ReactPlayer from "react-player/youtube";
import Oursrvices from "../../components/Oursrvices";

export default function Home() {
  return (
    <div>
      <img
        src="https://image.freepik.com/free-vector/draw-banner-cute-cat-sleeping-so-sweet-dream_45130-597.jpg"
        style={{ width: "100%", height: "15%" }}
      />
      <Oursrvices />
    </div>
  );
}
