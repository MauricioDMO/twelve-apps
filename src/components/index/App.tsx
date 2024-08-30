"use client"

import { useRef, useState } from "react";

import { IconArrowRight, IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import styles from "./App.module.css"

export interface AppProps {
  url: string;
  name: string;
  description: string;
  requirements: string[];
  image: string;
  color?: `#${string}`;
  randomColor?: boolean;
}

const getRandColor = () => {
  const COLORS = [
    '#ffbe0b',
    '#fb5607',
    '#ff006e',
    '#8338ec',
    '#3a86ff',
    '#228b22'
  ];
  return COLORS[Math.floor(Math.random() * COLORS.length)] as `#${string}`;
}


export function App ({name, description, requirements, image, url, color = "#ffffff20", randomColor } : AppProps) {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const randomColorRef = useRef(getRandColor());

  if (randomColor) color = randomColorRef.current + 'bb';

  const [size, setSize] = useState(0);

  function handleMouseMovement  (event: React.MouseEvent) {
    const $currentTarget = event.currentTarget;
    const { left, top, height, width } = $currentTarget.getBoundingClientRect();
    
    let percentageX = (event.clientX - left) / width
    let percentageY = (event.clientY - top) / height

    setSize((width + height) / 2);

    const strong = 10;
    percentageX = (1 / (1 + Math.pow(3, -strong * (percentageX - 0.5)))) * 100
    percentageY = (1 / (1 + Math.pow(3, -strong * (percentageY - 0.5)))) * 100

    setXPosition(percentageX);
    setYPosition(percentageY);
  }

  const handleMouseLeave = () => {
    randomColorRef.current = getRandColor(); 
  }

  const style = {
    "--x-position": `${xPosition}%`,
    "--y-position": `${yPosition}%`,
    "--color": `${color}`,
    "--size": `${size}px`
  } as React.CSSProperties;


  return <article 
    className={`flex flex-col items-center relative bg-zinc-800/50 rounded-xl p-4 overflow-hidden ${styles.app}`}
    onMouseMove={handleMouseMovement}
    onMouseLeave={handleMouseLeave}
    style={style}>

  <svg width="0" height="0">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
    </filter>
  </svg>

  <h2 className="text-2xl font-bold text-center mb-4">{name}</h2>
  <div className='grid md:grid-cols-2 gap-4 place-items-center'>
    <Image src={image} alt={name} className="w-full rounded-lg" width={1080} height={477}/>
    <section>
      <p className="my-4">{description}</p>
      <ul className='list-disc ml-6 pb-6'>
        {requirements.map((requirement, index) => (
          <li key={index} className="text-left">{requirement}</li>
        ))}
      </ul>
    </section>
  </div>
  <nav className='flex gap-4 my-4'>
    <Link href={url}
      className="bg-zinc-700 border-transparent border text-white px-4 py-2 rounded-md hover:border-white transition flex items-center gap-2 hover:scale-105">
      Ver proyecto
      <IconArrowRight stroke={2} />
    </Link>
    <a href="https://github.com/MauricioDMO/twelve-apps"
      className="bg-zinc-700 border-transparent border text-white px-4 py-2 rounded-md hover:border-white transition flex items-center gap-2 hover:scale-105">
      Ver código
      <IconBrandGithub stroke={2} />
    </a>
  </nav>
</article>
}