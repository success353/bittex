import Render from '@/components/Render';
import React from 'react';

import axios from 'axios';

function episodes({ data }) {
  return <Render data={data} />
}
export default episodes;

export const getServerSideProps = async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/episode');
  const data = await response.data;

  return {
    props: {
      data,
    },
  };
};
