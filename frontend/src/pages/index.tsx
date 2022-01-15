import type { NextPage } from 'next';
import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';

import { HeaderDsMovie } from '../components/HeaderDsMovie';

import styles from './styles.module.scss';

import ImgCard from '../assets/images/dsmovie/card-img.svg';
import { ButtonDefault } from '../components/ButtonDefault';
import { PaginationDefault } from 'components/PaginationDefault';

const Home: NextPage = () => {
  return (
    <div className=''>
      <HeaderDsMovie title='Home' />
      <main className={`container`}>
        <div className='content'>
          <PaginationDefault />
        </div>
        <div className='content'>
          <section className={`grid grid_3 ${styles.home__container}`}>
            <article className={`${styles.home__container_card}`}>
              <Image src={ImgCard} alt={'Imagem do Card'} />
              <div className={`${styles.home__container_card_content}`}>
                <h2>O Espetacular Homem-Aranha 2: A Ameaça de Electro</h2>
                <span>3.8</span>
                <div>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <strong>13 avaliações</strong>
                <ButtonDefault
                  title='Avaliar'
                  size='link'
                  type='button'
                  className='bgcolor__blue_400'
                  href={'/valuation'}
                />
              </div>
            </article>
            <article className={`${styles.home__container_card}`}>
              <Image src={ImgCard} alt={'Imagem do Card'} />
              <div className={`${styles.home__container_card_content}`}>
                <h2>O Espetacular Homem-Aranha 2: A Ameaça de Electro</h2>
                <span>3.8</span>
                <div>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <strong>13 avaliações</strong>
                <ButtonDefault
                  title='Avaliar'
                  size='link'
                  type='button'
                  className='bgcolor__blue_400'
                  href={'/valuation'}
                />
              </div>
            </article>
            <article className={`${styles.home__container_card}`}>
              <Image src={ImgCard} alt={'Imagem do Card'} />
              <div className={`${styles.home__container_card_content}`}>
                <h2>O Espetacular Homem-Aranha 2: A Ameaça de Electro</h2>
                <span>3.8</span>
                <div>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <strong>13 avaliações</strong>
                <ButtonDefault
                  title='Avaliar'
                  size='link'
                  type='button'
                  className='bgcolor__blue_400'
                  href={'/valuation'}
                />
              </div>
            </article>
          </section>
          <section className={`grid grid_3 ${styles.home__container}`}>
            <article className={`${styles.home__container_card}`}>
              <Image src={ImgCard} alt={'Imagem do Card'} />
              <div className={`${styles.home__container_card_content}`}>
                <h2>O Espetacular Homem-Aranha 2: A Ameaça de Electro</h2>
                <span>3.8</span>
                <div>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <strong>13 avaliações</strong>
                <ButtonDefault
                  title='Avaliar'
                  size='link'
                  type='button'
                  className='bgcolor__blue_400'
                  href={'/valuation'}
                />
              </div>
            </article>
            <article className={`${styles.home__container_card}`}>
              <Image src={ImgCard} alt={'Imagem do Card'} />
              <div className={`${styles.home__container_card_content}`}>
                <h2>O Espetacular Homem-Aranha 2: A Ameaça de Electro</h2>
                <span>3.8</span>
                <div>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <strong>13 avaliações</strong>
                <ButtonDefault
                  title='Avaliar'
                  size='link'
                  type='button'
                  className='bgcolor__blue_400'
                  href={'/valuation'}
                />
              </div>
            </article>
            <article className={`${styles.home__container_card}`}>
              <Image src={ImgCard} alt={'Imagem do Card'} />
              <div className={`${styles.home__container_card_content}`}>
                <h2>O Espetacular Homem-Aranha 2: A Ameaça de Electro</h2>
                <span>3.8</span>
                <div>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <strong>13 avaliações</strong>
                <ButtonDefault
                  title='Avaliar'
                  size='link'
                  type='button'
                  className='bgcolor__blue_400'
                  href={'/valuation'}
                />
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
