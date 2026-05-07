// src/components/Reusable/YouTubeEmbed.js
import React from 'react';
import './YoutubeEmbed.css';

function YouTubeEmbed({ 
  videoId, 
  title = "YouTube video player",
  autoplay = false,
  controls = true,
  muted = false,
  loop = false,
  startTime = 0
}) {
  // Build the embed URL with parameters
  const buildEmbedUrl = () => {
    let url = `https://www.youtube.com/embed/${videoId}`;
    const params = new URLSearchParams();

    if (autoplay) params.append('autoplay', '1');
    if (!controls) params.append('controls', '0');
    if (muted) params.append('mute', '1');
    if (loop) {
      params.append('loop', '1');
      params.append('playlist', videoId); // Required for loop to work
    }
    if (startTime > 0) params.append('start', startTime.toString());

    const queryString = params.toString();
    return queryString ? `${url}?${queryString}` : url;
  };

  return (
    <div className="youtube-embed-container">
      <iframe
        className="youtube-embed-iframe"
        src={buildEmbedUrl()}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubeEmbed;