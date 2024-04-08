"use client"

import React, { useState } from 'react';
import Image from 'next/image'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import BackButton from '../components/BackButton'
import HomeIcon from '@mui/icons-material/Home';

const MobileHero = (props) => {
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    setShowVideo(true);
  };

  return (
    <div id="hero-container" className='container relative'>
      {showVideo ? (
        <iframe
          width="400"
          height="240"
          src={`https://vidsrc.to/embed/movie/${props.tt}`}
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <div className='overLay'></div>
          <div className='backButton flex justify-between absolute px-4 py-4 top-1'>

          <BackButton style={{ backgroundColor: "#37373759", fontSize: "0.5em", height: "25px", width: "25px", borderRadius: "50%", cursor: "pointer", float: "left" }} />
          <Link href={'/'}>
          <HomeIcon sx={{ backgroundColor: "#37373759", fontSize: "0.5em", height: "25px", width: "25px", borderRadius: "50%", cursor: "pointer", float: "right" }} />
          </Link>
          </div>
          <Image src={props.poster} alt={''} width={'400'} height={'240'} />
          <div className='playIcon-cont' onClick={playVideo}>
            <PlayCircleIcon id="play-icon" sx={{ fontSize: "5em", cursor: "pointer" }} />
          </div>
          <div style={{ width: "100%" }} className='reviews px-2 py-4 flex justify-between align-middle absolute bottom-3'>
            <div style={{ backgroundColor: "#37373759", padding: "0 10px", display: "flex", gap: "1px", alignItems: "center" }}>
              <ThumbUpIcon sx={{ fontSize: "1em" }} /> - <p>{props.imdbVotes}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileHero;