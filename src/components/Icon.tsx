import Image from 'next/image';
import React from 'react';

type IconProps = {
  src: string;
  alt: string;
};

function Icon({ src, alt }: IconProps) {
  return <Image src={src} alt={alt} width={45} height={45} />;
}

export default Icon;
