"use server"

import React from 'react'

export default async function getMovie(prop) {

const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API}&i=${prop}`);

const results = await response.json();


  return results;
}
