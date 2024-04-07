"use server"

import React from 'react'

export default async function getMovies(prop) {

const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API}&s=${prop}&type=movie&y=2023`);

const results = await response.json();


  return results;
}
