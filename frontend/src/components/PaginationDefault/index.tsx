import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styles from './styles.module.scss';

const PaginationDefault: React.FC = () => {
  return (
    <div className={styles.paginatoContainer}>
      <nav aria-label='Page navigation example'>
        <ul>
          <li>
            <a aria-disabled='true' href='#'>
              <FaAngleLeft />
            </a>
          </li>
          <li>
            <a href='#'>1</a>
          </li>
          <span>de</span>
          <li>
            <a href='#'>23</a>
          </li>

          <li>
            <a href='#'>
              <FaAngleRight />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { PaginationDefault };
