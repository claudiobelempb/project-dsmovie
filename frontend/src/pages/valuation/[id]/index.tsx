import Image from 'next/image';

import { HeaderDsMovie } from 'components/HeaderDsMovie';
import { ButtonDefault } from 'components/ButtonDefault';
import styles from './styles.module.scss';

import { InputDefault } from 'components/InputDefault';

import ImgCard from 'assets/images/dsmovie/card-img.svg';
const Valuation: React.FC = () => {
  const movie = {
    id: 1,
    image:
      'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg',
    title: 'The Witcher',
    count: 2,
    score: 4.5
  };

  return (
    <div className=''>
      <HeaderDsMovie title='Avaliação' />
      <main className={`container`}>
        <section className={`content ${styles.valuation__container}`}>
          <article className={`${styles.valuation__container_card}`}>
            <Image
              src={movie.image}
              alt={movie.title}
              width={480}
              height={300}
            />
            <div className={`${styles.valuation__container_card_content}`}>
              <h2>{movie.title}</h2>

              <InputDefault
                label='Informe seu email'
                type='text'
                className='bgcolor__gray_200 bgcolor__gray_200_border'
                placeholder='Informe seu email'
              />
              <InputDefault
                label='Informe sua avaliação'
                type='select'
                className='bgcolor__gray_200 bgcolor__gray_200_border'
                placeholder='Informe sua avaliação'
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </InputDefault>

              <ButtonDefault
                title='Salvar'
                size='small'
                type='button'
                className='bgcolor__blue_400'
              />
              <ButtonDefault
                title='Cancelar'
                size='link'
                type='button'
                className='bgcolor__blue_400'
                href={'/'}
              />
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Valuation;
