import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();
  const playCountRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setPlaybackRate = () => {
      video.playbackRate = 2;
    };

    const handleVideoEnd = () => {
      playCountRef.current++;
      if (playCountRef.current < 2) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("loadedmetadata", setPlaybackRate);
    video.addEventListener("ended", handleVideoEnd);
    return () => {
      video.removeEventListener("loadedmetadata", setPlaybackRate);
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

      <button>Buy</button>

      <p>From $1500 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
