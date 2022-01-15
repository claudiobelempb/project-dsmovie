import type { NextPage } from 'next';

import { HeaderDsMovie } from '../components/HeaderDsMovie';

import styles from './styles.module.scss';

import { PaginationDefault } from 'components/PaginationDefault';
import { MovieCard } from 'components/MovieCard';
import { api } from 'services/api';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    api.get('/movies?page=0&size=12&sort=id,asc').then(resp => {
      console.log(resp.data);
    });
  });

  return (
    <div className=''>
      <HeaderDsMovie title='Home' />
      <main className={`container`}>
        <div className='content'>
          <PaginationDefault />
        </div>
        <div className='content'>
          <section className={`grid grid_4 ${styles.home__container}`}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
