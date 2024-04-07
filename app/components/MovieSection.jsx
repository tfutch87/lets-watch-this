import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MovieSection(props) {
  return (

    <div className='container px-2 '>
      <div className="py-2 no-scroll" style={{ overflowX: "auto", overflowY: "hidden" }} >
        <div className="flex space-x-2">
          <div className='movie-section'> 
          <Link href={`/Movie/tt8667828`} >
          <Image width={300} height={200} src={'https://m.media-amazon.com/images/M/MV5BNjhkZjFjNDEtNGU5ZC00Njg1LThjNWEtZGU1ZTkxZjJlODE4XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_SX300.jpg'} alt='' />
          </Link>
          </div>

          <div className='movie-section'> <Image width={300} height={200} src={'https://m.media-amazon.com/images/M/MV5BZjJlYWVmODUtZWRjYi00MWQzLTg0NDQtNDc2MzYyNDcwN2FmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg'} alt='' />
          </div>

          <div className='movie-section'>
          <Link style={{cursor:"pointer"}} href={`/Movie/tt26230118`} >
           <Image width={300} height={200} src={'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'} alt='' />
           </Link>
          </div>

          <div className='movie-section'>
          <Link style={{cursor:"pointer"}} href={`/Movie/tt22805590`} >
           <Image width={300} height={200} src={'https://m.media-amazon.com/images/M/MV5BOTkzNzYzMzUtZGY4Mi00ZTNiLWJkNDQtMGNhMjQ0MDY3YThmXkEyXkFqcGdeQXVyMTQ5NjM1NjYy._V1_SX300.jpg'} alt='' />
           </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
