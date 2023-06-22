'use client';
import React, { useEffect, useState } from 'react';
import Pepe from './Pepe';
import Presentation from './Presentation';

function ShowPresentation() {
  const [showPepe, setShowPepe] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPepe(false);
    }, 5000);
    return () => clearTimeout(timer);
  });
  return <>{showPepe ? <Pepe /> : <Presentation />}</>;
}

export default ShowPresentation;
