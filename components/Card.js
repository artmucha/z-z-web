import Image from 'next/image';

import { card, postCard, cardTitle, cardMeta } from 'styles/Card.module.css';

const Card = ({type, title, image, width, height, category, date}) => {
  return (
    <div className={ type === 'icon' ? card : postCard }>
      {/* <Image src={image} width={width} height={height} /> */}
      <h3 className={cardTitle}>{title}</h3>
      { type !== 'icon' ? (
        <div>
          <p className={cardMeta}>Kategoria: <span>{category}</span></p>
          <p className={cardMeta}>Dodano: <span>{date}</span></p>
        </div>
      ) : null
    }
    </div>
  )
};

export default Card;

