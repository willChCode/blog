'use client';

import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

function Pepe() {
  const playerRef = useRef<any>(null);

  return (
    <Player
      ref={playerRef}
      autoplay
      loop
      controls={true}
      src='/gifs/rana-pepe.json'
      style={{ height: '50px', width: '50px' }}
    />
  );
}

export default Pepe;
