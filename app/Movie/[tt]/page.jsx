import React from 'react'
import MobileHero from '../../components/MobileHero'
import getMovie from '../../components/utils/movies/getMovie'
import Link from 'next/link';
import BackButton from '../../components/BackButton'


export default async function page({ params }) {

  const movie = await getMovie(params.tt)

  return (
    <>
    
      <MobileHero imdbVotes={movie.imdbVotes} poster={movie.Poster} tt={params.tt} />
      <div className='px-2 py-4'>
        <div className='flex justify-between'>
          <div>
            <span  className='block'> {movie.Genre}</span>
            <span className='block'> {movie.Released}</span>
          </div>

          <div>
          <span className='block'> {movie.Rated}</span>
          <span className='block'> {movie.Runtime}</span>
          </div>
        </div>
        <h1>{movie.Title}</h1>
        <p>{movie.Plot} </p>
      </div>
      <div className='cast-members-cont px-2 py-4'>
        <h2 className='text-zinc-700'> Crew </h2>
        <div className='cast-members-flex flex gap-2 px-2 py-4'>
          <div className='cast-member text-zinc-700 px-2 py-4'>
            {movie.Actors}
          </div>
        </div>
      </div>

 
    </>
  )
}
