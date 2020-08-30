import React from "react";
import { Player } from "video-react";
import ReactPlayer from "react-player/youtube";
import Oursrvices from "../../components/Oursrvices";
import Clients from "../../components/Clients";
import "./index.css";

export default function Home() {
  return (
    <div>
      <img
        className="banner-img"
        src="https://image.freepik.com/free-vector/draw-banner-cute-cat-sleeping-so-sweet-dream_45130-597.jpg"
      />
      <Oursrvices />
      <video
        autoplay
        style={{ width: "100%", height: "500px", marginTop: "30px" }}
      >
        <source src="/Videos/movie.mp4" type="video/mp4" />
      </video>
      <Clients />
    </div>
  );
}
