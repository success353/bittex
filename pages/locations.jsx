import Render from '@/components/Render'
import React from 'react'

import axios from 'axios'

function locations({data}) {
  return (
    <Render data={data} />
  )
}

export default locations

export const getServerSideProps = async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/location');
  const data = await response.data;

  return {
    props: {
      data,
    },
  };
};