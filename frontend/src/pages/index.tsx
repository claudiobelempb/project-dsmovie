import type { NextPage } from 'next';
import Image from 'next/image';
import { FaRegStar, FaRegStarHalf } from 'react-icons/fa';

import { HeaderDsMovie } from '../components/HeaderDsMovie';

import styles from './styles.module.scss';

import ImgCard from '../assets/images/dsmovie/card-img.svg';
import { ButtonDefault } from '../components/ButtonDefault';
import { PaginationDefault } from 'components/PaginationDefault';
import { MovieCard } from 'components/MovieCard';

const Home: NextPage = () => {
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
