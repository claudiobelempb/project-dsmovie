import Image from 'next/image';
import './styles.module.scss';

interface ICheckutProduct {
  id: number;
  title: string;
  price: number;
  rating: string;
  image: string;
}

const CheckoutProduct: React.FC<ICheckutProduct> = ({
  id,
  title,
  price,
  rating,
  image
}) => {
  const array_rating = Array<string>(rating)
    .fill(rating)
    .map((_, i) => <p key={i}>⭐</p>);

  return (
    <div className='checkout__product'>
      <Image
        src='https://m.media-amazon.com/images/I/61pOZ7mAn2S._AC_SY200_.jpg'
        alt=''
        className='checkout__product-img'
      />
      <div className='checkout__product-infor'>
        <h3 className='checkout__product-subtitle'>
          Xiaomi Redmi Note 10S 128gb 6gb RAM
        </h3>
        <div className='checkout__product-price'>
          <span>$</span>
          <strong>1.696</strong>
        </div>
        <div className='checkout__product-rating'>{array_rating}</div>
        <button className='checkout__product-button'>Remove from Basket</button>
      </div>
    </div>
  );
};

export { CheckoutProduct };
