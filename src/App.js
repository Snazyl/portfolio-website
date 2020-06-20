import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [gPlaying, setGPlaying] = useState(false);
  // const [nPlaying, setNPlaying] = useState(false);

  const toggleAudio = (e) => {
    const playback = document.getElementById(
      `${e.target.getAttribute("name")}`
    );
    let audio_elements = document.getElementsByTagName("audio");
    for (let i = 0; i < audio_elements.length; i++) {
      if (audio_elements[i] !== e.target) {
        audio_elements[i].pause();
      }
    }
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      playback.pause();
      return;
    }
    playback.play();
  };

  return (
    <div className="content-wrap">
      <Navbar />
      <div className="img-container">
        <img src="face.jpg" alt="" />
      </div>
      <div className="container commercial-container">
        <div className="sub-container">
          <div className="card commercial-card">
            <figure className="front commercial-front">
              <h1>
                <i className="fas fa-microphone"></i> Commercial
              </h1>
            </figure>
            <figure className="back commercial-back">
              <i
                onClick={toggleAudio}
                name="commercialReel"
                className={
                  isPlaying
                    ? "fas fa-pause-circle play"
                    : "fas fa-play-circle play"
                }
              ></i>
              <a href="commercial.mp3" download="LeeFosterCommercialReel.mp3">
                <i
                  className="fas fa-download"
                  // style={{ marginLeft: "10px" }}
                ></i>
              </a>
            </figure>
          </div>
        </div>
      </div>
      <div className="container gaming-container">
        <div
          className="sub-container"
          // onTouchStart="this.classList.toggle('hover');"
        >
          <div className="card gaming-card">
            <figure className="front gaming-front">
              <h1>
                <i className="fas fa-gamepad"></i> Gaming
              </h1>
            </figure>
            <figure className="back gaming-back">
              <i
                onClick={toggleAudio}
                name="gamingReel"
                className={
                  isPlaying
                    ? "fas fa-pause-circle play"
                    : "fas fa-play-circle play"
                }
              ></i>
              <a href="game.mp3" download="LeeFosterGamingReel.mp3">
                <i
                  className="fas fa-download"
                  // style={{ marginLeft: "10px" }}
                ></i>
              </a>
            </figure>
          </div>
        </div>
      </div>
      <div className="narration-container">
        <div className="sub-container">
          <div className="card narration-card">
            <figure className="front narration-front">
              <h1>
                <i className="fas fa-book"></i> Narration
              </h1>
            </figure>
            <figure className="back narration-back">
              <i
                className={
                  isPlaying
                    ? "fas fa-pause-circle play"
                    : "fas fa-play-circle play"
                }
                name="narrationReel"
                onClick={toggleAudio}
              ></i>
              <a href="narration.mp3" download="LeeFosterNarrationReel.mp3">
                <i
                  className="fas fa-download"
                  // style={{ marginLeft: "10px" }}
                ></i>
              </a>
            </figure>
          </div>
        </div>
      </div>

      {/* <div class="card">
          <figure class="front gaming-front">
            <h1>
              <i class="fas fa-gamepad"></i> Gaming
            </h1>
          </figure>
          <figure class="back gaming-back">
            <i class="fas fa-play-circle play"></i>
          </figure>
        </div>
        <div class="card">
          <figure class="front narration-front">
            <h1>
              <i class="fas fa-book"></i> Narration
            </h1>
          </figure>
          <figure class="back narration-back">
            <i class="fas fa-play-circle play"></i>
          </figure>
        </div> */}
    </div>
  );
}

export default App;
