import Image from 'next/image'
"use client"
import { useEffect , useState } from 'react'
import { IMAGE_BASE_URL } from './config'


import {getMovies} from "./utilities/utils"
import { type } from 'os';

interface Movie{
  id:number ;
  poster_path : string,
  genre_ids: number[],
  title:string

}
type MovieData = {
  results: Movie[]
}

export default function Home() {
  const [movies , setMovies] = useState<MovieData>();
useEffect(()=>{
  (async () => {
    const movies = await getMovies()
    setMovies(movies)
    console.log({movies})

  })();
} , []) 

  return (
    <main>
      
    </main>
 
    //  <div className='grid grid-cols-4 gap-4'>
    //   {movies && movies.results.map((item) => (
     
    //     <div key={item.id} className='overflow-hidden'>
       
    //       <img
    //         src={`${IMAGE_BASE_URL}${item.poster_path}`}
    //         alt={item.title}
    //         className='w-full h-auto object-cover'
    //       />
    //     </div>
    //   ))}
    // </div>
  
  
      
      
  
  )
}
