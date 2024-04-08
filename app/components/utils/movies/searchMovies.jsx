"use server"

import React from 'react'

export default async function searchMovies(prop, page) {

  console.log(prop, page)

const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API}&s=${prop}&page=${page}`);

const results = await response.json();


  return results;
}
