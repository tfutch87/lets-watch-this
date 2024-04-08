import React from 'react'
import Image from 'next/image'
import getMovies from '../components/utils/movies/getMovies'
import Link from 'next/link';



export default async function MovieList(props) {

    const movies = await getMovies(props.search);


    function returnString(string){

        const tt = JSON.stringify(string).replace(/\"/g, "")
       
        return  `/Movie/${tt}/`
    }

    // convert to string remove ""s
    // const imdbID = JSON.stringify(movies.imdbID).replace(/\"/g, "");
   



    return (
        <div className="container p-4">
            <h2 className="py-2"> {props.title} </h2>
            <div className="py-2 no-scroll" style={{ overflowX: "auto", overflowY: "hidden" }} >
                <div className=" space-x-4 flex">
                    {movies.Search.map((movie) => (
                        
               <div className="rounded border border-zinc-900" style={{flex:"1 0 100px", objectFit:"cover", display: "flex", flexDirection:"column"}} key={movie.imdbID}>
               <Link href={returnString(movie.imdbID)} >
                            <Image style={{height:"150px", objectFit: "cover"}} src={movie.Poster} alt={movie.Title} width={200} height={200} />
                            </Link>
                        </div>
                       
                    ))}
                </div>
            </div>

        </div>
    )
}
