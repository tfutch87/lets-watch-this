import React from 'react'
import searchMovies from '../../components/utils/movies/searchMovies'
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '../../components/BackButton';
import Search from '../../components/Search';



export default async function page({params}) {

    const results = await searchMovies(params.search)

    // if no moives return he for the user to go back home
    if(results.Response === 'False') {
        return (
            <>
                <div className='container'>
                
                    <div className='row'>
                        <div className='px-2 py-4'>
                            <h1 className='text-center text-lg'>
                            <span className='float-left'> <BackButton /></span>
                            Search Results</h1>
                            <Search />
                            <div className='flex justify-evenly gap-2 py-4 flex-wrap'>
                                <h1 className='text-center text-2xl'>No Results Found '{params.search}'</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}

    // back button
    // const BackButton = () => (
    //     <Link href='/'>
    //         <button className='bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Back</button>
    //     </Link>
    // )

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='px-2 py-4'>
                    <h1 className='text-center text-lg'>
                   <span className='float-left'> <BackButton /></span>
                    Search Results</h1>
                    <div className='flex justify-evenly gap-2 py-4 flex-wrap'>
                        {results.Search.map((movie, index) => (
                            <div className='col-4' key={index}>
                                <div className='card'>
                                    <Link href={`/Movie/${movie.imdbID}`} >
                                    <Image src={movie.Poster} alt={movie.Title}  width={150} height={100} className='card-img-top rounded border border-zinc-700 shadow-zinc-950 ' />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
