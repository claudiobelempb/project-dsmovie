import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styles from './styles.module.scss';

const PaginationDefault: React.FC = () => {
  return (
    <div className={styles.paginatoContainer}>
      <nav aria-label='Page navigation example'>
        <ul className='pagination'>
          <li className='page-item'>
            <a className='page-link' href='#'>
              <FaAngleLeft />
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              1
            </a>
          </li>
          <span>de</span>
          <li className='page-item'>
            <a className='page-link' href='#'>
              23
            </a>
          </li>

          <li className='page-item'>
            <a className='page-link' href='#'>
              <FaAngleRight />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { PaginationDefault };
