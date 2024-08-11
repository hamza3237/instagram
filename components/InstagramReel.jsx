"use client";

import React, { useEffect, useState } from 'react';

export default function InstagramReel({ url }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set flag to true when the component mounts on the client

    // Load Instagram embed script only on the client
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  if (!isClient) {
    return null; // Return null during server-side rendering
  }

  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ width: '100%' }}
      ></blockquote>
      <script async src="//www.instagram.com/embed.js"></script>
    </div>
  );
}
