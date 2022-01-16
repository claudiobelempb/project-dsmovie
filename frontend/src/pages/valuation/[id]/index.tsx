import Image from 'next/image';
import { useRouter } from 'next/router';

import { HeaderDsMovie } from 'components/HeaderDsMovie';
import { ButtonDefault } from 'components/ButtonDefault';
import styles from './styles.module.scss';

import { InputDefault } from 'components/InputDefault';
import { Movie } from 'types/Movie';
import { useEffect, useState } from 'react';
import { api } from 'services/api';

const Valuation: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchSomethingById = async () => {
      api.get(`/movies/${id}`).then(resp => {
        const data = resp.data as Movie;
        setMovie(data);
      });
    };
    fetchSomethingById();
  }, [id]);

  return (
    <div className=''>
      <HeaderDsMovie title='Avaliação' />
      <main className={`container`}>
        <section className={`content ${styles.valuation__container}`}>
          <article className={`${styles.valuation__container_card}`}>
            <img src={movie?.image} alt={movie?.title} />
            <div className={`${styles.valuation__container_card_content}`}>
              <h2>
                {movie?.title} - {movie?.id}
              </h2>

              <form>
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
                  <option selected>4</option>
                  <option value='5'>5</option>
                </InputDefault>

                <ButtonDefault
                  title='Salvar'
                  size='small'
                  type='button'
                  className='bgcolor__blue_400'
                />
              </form>
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
