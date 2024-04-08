"use server"

import React from 'react'

export default async function searchMovies(prop) {

const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API}&s=${prop}`);

const results = await response.json();


  return results;
}
