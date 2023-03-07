import Render from '@/components/Render';
import React from 'react';
import axios from 'axios';

function characters({ data }) {
  return <Render data={data} />;
}

export default characters;

export const getServerSideProps = async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  const data = await response.data;

  return {
    props: {
      data,
    },
  };
};
