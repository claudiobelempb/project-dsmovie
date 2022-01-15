import Image from 'next/image';

import ImgCard from 'assets/images/dsmovie/card-img.svg';
import ImgStarFull from 'assets/images/dsmovie/star-full.svg';
import ImgStarHalf from 'assets/images/dsmovie/star-half.svg';
import ImgStarEmpty from 'assets/images/dsmovie/star-empty.svg';
import { ButtonDefault } from 'components/ButtonDefault';

import styles from './styles.module.scss';

const MovieCard: React.FC = () => {
  const movie = {
    id: 1,
    image:
      'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg',
    title: 'The Witcher',
    count: 2,
    score: 4.5
  };
  const score = 3.5;
  const count = 13;
  return (
    <>
      <article className={`${styles.movie__container_card}`}>
        <Image src={movie.image} width={260} height={150} alt={movie.title} />
        <div className={`${styles.movie__container_card_content}`}>
          <h2>{movie.title}</h2>
          <span>{movie.score > 0 ? movie.score.toFixed(1) : '-'}</span>
          <div className={styles.movie__star}>
            <Image src={ImgStarFull} alt={'Imagem do Card'} />
            <Image src={ImgStarFull} alt={'Imagem do Card'} />
            <Image src={ImgStarFull} alt={'Imagem do Card'} />
            <Image src={ImgStarHalf} alt={'Imagem do Card'} />
            <Image src={ImgStarEmpty} alt={'Imagem do Card'} />
          </div>
          <strong>{movie.count} avaliações</strong>
          <ButtonDefault
            title='Avaliar'
            size='link'
            type='button'
            className='bgcolor__blue_400'
            href={'/valuation'}
          />
        </div>
      </article>
    </>
  );
};

export { MovieCard };
