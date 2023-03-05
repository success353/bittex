import React from 'react'

import axios from 'axios'

import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

function Home({ data }) {
  console.log(data)
  return (
    <div className='font-inter'>
      {data && (
        <div className='flex flex-col justify-evenly items-center min-h-screen lg:flex-row md:flex-row font-bold'>
          <div className='relative flex justify-center bg-green-100 text-green-600 py-28 rounded cursor-pointer w-[100%] text-center lg:w-[25%] lg:py-3 md:w-[20%] md:py-2'>Characters
            <span className='absolute inset-y-0 right-1 flex items-center pl-3'><ArrowLongRightIcon className='h-10 w-10' /></span></div>
          <div className='relative flex justify-center bg-red-100 text-red-600 py-28 rounded cursor-pointer w-[100%] text-center lg:w-[25%] lg:py-3 md:w-[20%] md:py-2'>Locations
            <span className='absolute inset-y-0 right-1 flex items-center pl-3'><ArrowLongRightIcon className='h-10 w-10' /></span></div>
          <div className='relative flex justify-center bg-yellow-100 text-yellow-600 py-28 rounded cursor-pointer w-[100%] text-center lg:w-[25%] lg:py-3 md:w-[20%] md:py-2'>Episodes
            <span className='absolute inset-y-0 right-1 flex items-center pl-3'><ArrowLongRightIcon className='h-10 w-10' /></span></div>
        </div>
      )}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const response = await axios.get('https://rickandmortyapi.com/api')
  const data = await response.data

  return {
    props: {
      data
    }
  }
}