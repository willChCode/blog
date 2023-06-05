import React from 'react';

interface LabelProps {
  label: string;
  labelNew?: boolean;
}

function LabelColor({ label }: LabelProps) {
  const colors = [
    'bg-red-300',
    'bg-green-300',
    'bg-orange-300',
    'bg-sky-300',
    'bg-slate-300',
    'bg-emerald-300',
    'bg-teal-300'
  ]; // Colores disponibles
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Color aleatorio

  return (
    <label
      className={`
      px-2 py-[2px] text-sm rounded-md ${randomColor} dark:text-black `}>
      {label}
    </label>
  );
}

export default LabelColor;
