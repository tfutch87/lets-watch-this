'use client'

import React, { useEffect, useState } from 'react';
import searchMovies from '../../components/utils/movies/searchMovies';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '../../components/BackButton';
import Search from '../../components/Search';
import { useRouter } from 'next/navigation';
import Pagination from '@mui/material/Pagination';
import HomeIcon from '@mui/icons-material/Home';

export default function Page({ params }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [results, setResults] = useState(null);
    const [total, setTotal] = useState(0);
    const [pages, setPages] = useState(0);
    const router = useRouter();


    useEffect(() => {
        console.log('ran')
        const fetchData = async () => {
            const response = await searchMovies(params.search, currentPage);
            setResults(response);
            setTotal(response.totalResults);
            setPages(Math.floor(response.totalResults / 10));
            router.refresh();
        };

        fetchData();
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (results && results.Response === 'False') {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='px-2 py-4'>
                            <div>
                                <div className='text-center align-middle justify-between flex text-lg'>
                                    <span className='block'>
                                        <BackButton />
                                    </span>
                                    <h1 className='text-lg'> Search Results</h1>
                                    <Link className='block' href={'/'}>
                                    <HomeIcon sx={{ backgroundColor: "#37373759", fontSize: "0.5em", height: "25px", width: "25px", borderRadius: "50%", cursor: "pointer", float: "right" }} />
                                </Link>
                                </div>
                             
                            </div>
                            <Search />

                            <div className='flex justify-evenly gap-2 py-4 flex-wrap'>
                                <h1 className='text-center text-2xl'>
                                    No Results Found '{params.search}'
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='px-2 py-4'>
                    <div>
                                <div className='text-center align-middle justify-between flex text-lg'>
                                    <span className='block'>
                                        <BackButton />
                                    </span>
                                    <h1 className='text-lg'> Search Results</h1>
                                    <Link className='block' href={'/'}>
                                    <HomeIcon sx={{ backgroundColor: "#37373759", fontSize: "0.5em", height: "25px", width: "25px", borderRadius: "50%", cursor: "pointer", float: "right" }} />
                                </Link>
                                </div>
                             
                            </div>
                        <div className='flex justify-evenly gap-2 py-4 flex-wrap'>
                            {results &&
                                results.Search.map((movie, index) => (
                                    <div className='col-4' key={index}>
                                        <div className='card'>
                                            <Link href={`/Movie/${movie.imdbID}`}>
                                                <Image
                                                    src={
                                                        movie.Poster !== 'N/A'
                                                            ? movie.Poster
                                                            : '/rottentom.png'
                                                    }
                                                    alt={movie.Title}
                                                    width={150}
                                                    height={100}
                                                    className='card-img-top rounded border border-zinc-700 shadow-zinc-950 '
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        {/* Add pagination buttons here */}
                        <div className='pagination text-zinc-200'>
                            {/* {Array.from({ length: pages }, (_, i) => i + 1).map((page) => ( */}


                            <Pagination

                                key={pages}
                                count={pages}
                                page={currentPage}
                                onChange={(event, currentPage) => handlePageChange(currentPage)}
                            />
                            {/* ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
