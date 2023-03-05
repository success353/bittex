import React from 'react'

import axios from 'axios'

function Home({ data }) {
  console.log(data)
  return (
    <div className='font-inter'>
      {data && (
        <div className='flex flex-col justify-evenly items-center min-h-screen lg:flex-row md:flex-row font-bold'>
          <div className='bg-green-100 text-green-600 py-24 rounded cursor-pointer w-[100%] text-center lg:w-[25%] lg:py-3 md:w-[20%] md:py-2'>Characters</div>
          <div className='bg-red-100 text-red-600 py-24 rounded cursor-pointer w-[100%] text-center lg:w-[25%] lg:py-3 md:w-[20%] md:py-2'>Locations</div>
          <div className='bg-yellow-100 text-yellow-600 py-24 rounded cursor-pointer w-[100%] text-center lg:w-[25%] lg:py-3 md:w-[20%] md:py-2'>Episodes</div>
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