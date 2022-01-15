import Image from 'next/image';

import { HeaderDsMovie } from 'components/HeaderDsMovie';
import { ButtonDefault } from 'components/ButtonDefault';
import styles from './styles.module.scss';

import ImgCard from 'assets/images/dsmovie/card-img.svg';
import { InputDefault } from 'components/InputDefault';

const Valuation: React.FC = () => {
  return (
    <div className=''>
      <HeaderDsMovie title='Avaliação' />
      <main className={`container`}>
        <section className={`content ${styles.valuation__container}`}>
          <article className={`${styles.valuation__container_card}`}>
            <Image src={ImgCard} alt={'Imagem do Card'} />
            <div className={`${styles.valuation__container_card_content}`}>
              <h2>O Espetacular Homem-Aranha 2: A Ameaça de Electro</h2>

              <InputDefault
                label='Informe seu email'
                type='text'
                className='bgcolor__gray_200 bgcolor__gray_200_border'
                placeholder='Informe seu email'
              />
              <InputDefault
                label='Informe sua avaliação'
                type='text'
                className='bgcolor__gray_200 bgcolor__gray_200_border'
                placeholder='Informe sua avaliação'
              />

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
