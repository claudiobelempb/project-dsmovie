import type { NextPage } from 'next';

import { HeaderDsMovie } from '../components/HeaderDsMovie';

import styles from './styles.module.scss';

import { PaginationDefault } from 'components/PaginationDefault';
import { MovieCard } from 'components/MovieCard';
import { api } from 'services/api';
import { useEffect, useState } from 'react';
import { MoviePage } from 'types/MoviePage';

const Home: NextPage = () => {
  const [pageNumer, setPageNumber] = useState(0);
  const [movies, setMovies] = useState<MoviePage[]>([]);

  useEffect(() => {
    api.get('/movies?page=0&size=12&sort=id,asc').then(resp => {
      const data = resp.data as MoviePage;
      setPageNumber(data.number);
    });
  }, []);

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
