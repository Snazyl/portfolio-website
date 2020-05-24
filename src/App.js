import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [cPlaying, setCPlaying] = useState(false);
  const [gPlaying, setGPlaying] = useState(false);
  const [nPlaying, setNPlaying] = useState(false);
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

  const playCommercial = () => {
    const playback = document.getElementById("commercialReel");
    playback.pause();
    console.log(playback);
  };
  // useEffect(() => {}, [isPlaying]);
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
                onClick={playCommercial}
                className={
                  cPlaying
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
                // onClick={() => playAudio("gamingReel")}
                class="fas fa-play-circle play"
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
                <i onClick={stop} class="fas fa-book"></i> Narration
              </h1>
            </figure>
            <figure class="back narration-back">
              <i
                // onClick={() => playAudio("narrationReel")}
                class="fas fa-play-circle play"
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
