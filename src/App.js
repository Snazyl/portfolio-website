import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import classnames from "classnames";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [gPlaying, setGPlaying] = useState(false);
  // const [nPlaying, setNPlaying] = useState(false);
  // const playAudio = (reel) => {
  //   const commercialReel = yeel);
  //   const playPromise = isPlaying
  //     ? commercialReel.pause()
  //     : commercialReel.play();
  //   if (playPromise !== undefined) {
  //     playPromise
  //       .then((_) => {
  //         // Automatic playback started!
  //         // Show playing UI.
  //         console.log("audio played auto");
  //       })
  //       .catch((error) => {
  //         // Auto-play was prevented
  //         // Show paused UI.
  //         console.log("playback prevented");
  //       });
  //   }
  // };

  const toggleAudio = (e) => {
    const playback = document.getElementById(
      `${e.target.getAttribute("name")}`
    );
    let audio_elements = document.getElementsByTagName("audio");
    for (let i = 0; i < audio_elements.length; i++) {
      if (audio_elements[i] != e.target) {
        audio_elements[i].pause();
      }
    }
    console.log(audio_elements);
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      playback.pause();
      return;
    }
    // if(playback.)
    playback.play();
    console.log(playback);
  };

  const stop = () => {
    const playback = document.getElementById("commercialReel");
    playback.pause();
  };

  return (
    <div className="content-wrap">
      <Navbar />
      <div className="container commercial-container">
        <div className="sub-container">
          <div className="card commercial-card">
            <figure className="front commercial-front">
              <h1>
                <i class="fas fa-microphone"></i> Commercial
              </h1>
            </figure>
            <figure class="back commercial-back">
              <i
                onClick={toggleAudio}
                name="commercialReel"
                className={
                  isPlaying
                    ? "fas fa-pause-circle play"
                    : "fas fa-play-circle play"
                }
              ></i>
            </figure>
          </div>
        </div>
      </div>
      <div className="container gaming-container">
        <div
          className="sub-container"
          ontouchstart="this.classList.toggle('hover');"
        >
          <div class="card gaming-card">
            <figure class="front gaming-front">
              <h1>
                <i class="fas fa-gamepad"></i> Gaming
              </h1>
            </figure>
            <figure class="back gaming-back">
              <i
                onClick={toggleAudio}
                name="gamingReel"
                className={
                  isPlaying
                    ? "fas fa-pause-circle play"
                    : "fas fa-play-circle play"
                }
              ></i>
            </figure>
          </div>
        </div>
      </div>
      <div className="narration-container">
        <div className="sub-container">
          <div class="card narration-card">
            <figure class="front narration-front">
              <h1>
                <i class="fas fa-book"></i> Narration
              </h1>
            </figure>
            <figure class="back narration-back">
              <i
                className={
                  isPlaying
                    ? "fas fa-pause-circle play"
                    : "fas fa-play-circle play"
                }
                name="narrationReel"
                onClick={toggleAudio}
              ></i>
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
