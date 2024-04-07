import React from 'react'
import Categories from '../Categories'
import MovieSection from '../MovieSection'
import MovieList from '../MovieList'

export default function Main(props) {

  return (
    <main>

    <Categories />
    <MovieSection />
    <MovieList search={'new'} title={'Featured'} />
    <MovieList search={'black'} title={'All Black'} />
    <MovieList search={'fight'} title={'Movies'} />
    <MovieList search={'they'} title={'Shows'} />
    </main>
  )
}
