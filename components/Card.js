import Image from 'next/image';

import { card } from 'styles/Card.module.css';

const Card = ({title, image, width, height}) => {
  return (
    <div className={card}>
        <Image src={image} width={width} height={height} />
      <h3>{title}</h3>
    </div>
  )
};

export default Card;

