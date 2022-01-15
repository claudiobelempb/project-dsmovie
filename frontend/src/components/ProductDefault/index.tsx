import Image from 'next/image';
// import { useStateValue } from '../../StateProvider';

import './styles.css';

interface IProductDefault {
  product_id: number;
  product_title: string;
  product_price: number;
  product_rating: string;
  product_image: string;
}

const ProductDefault: React.FC<IProductDefault> = ({
  product_id,
  product_title,
  product_price,
  product_rating,
  product_image
}) => {
  // const [{ basket }, dispatch] = useStateValue;

  // const addToBasket = () => {
  //   dispatch({
  //     type: 'ADD_TO_BASKET',
  //     item: {
  //       product_id: product_id,
  //       product_title: product_title,
  //       product_price: product_price,
  //       product_rating: product_rating,
  //       product_image: product_image
  //     }
  //   });
  // };

  const array_rating = Array(product_rating)
    .fill(product_rating)
    .map((_, i) => <p key={i}>⭐</p>);

  return (
    <div>
      <div className='product__default'>
        <div className='product__info'>
          <p className='product__title'>{product_title}</p>
          <div className='product__rating'>{array_rating}</div>
          <p className='product__price'>
            <small>$</small>
            <strong>{product_price}</strong>
          </p>
        </div>
        <Image src={product_image} alt='' className='product__image' />
        <button
          onClick={() => console.log('Clcik')}
          className='product__basket-add'
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export { ProductDefault };
