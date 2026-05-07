// src/components/VimeoEmbed.js
import React from 'react';
import './VimeoEmbed.css'; // We'll create this for responsive styling

/**
 * A reusable component for embedding Vimeo videos.
 * @param {object} props - The component's props.
 * @param {string} props.videoId - The ID of the Vimeo video.
 * @param {string} [props.privateHash] - The private hash for unlisted videos (optional).
 * @param {string} props.title - An accessible title for the video player.
 */
function VimeoEmbed({ videoId, privateHash, title }) {
  // Construct the base URL for the Vimeo player
  let embedUrl = `https://player.vimeo.com/video/${videoId}`;

  // If a private hash is provided, add it as a URL parameter
  if (privateHash) {
    embedUrl += `?h=${privateHash}`;
  }

  return (
    <div className="vimeo-container">
      <iframe
        title={title}
        src={embedUrl}
        className="vimeo-player"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VimeoEmbed;