import React from 'react';
import './VideoPeque.css';

import video2 from './Videos/video-2.mp4';
import video3 from './Videos/video-3.mp4';
import video4 from './Videos/video-4.mp4';


const VideosPeque = () => {
  const videos = [video2, video3, video4];

  return (
    <section className="videos-peque-container">
      {videos.map((src, i) => (
        <div className="video-peque-wrapper" key={i}>
          <video className="video-peque" autoPlay loop muted playsInline>
            <source src={src} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      ))}
    </section>
  );
};

export default VideosPeque;
