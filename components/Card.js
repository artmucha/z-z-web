import Image from 'next/image';

import { card, postCard, cardTitle, cardMeta } from 'styles/Card.module.css';

const Card = ({type, title, image, width, height}) => {
  return (
    <div className={ type === 'icon' ? card : postCard }>
      <Image src={image} width={width} height={height} />
      <h3 className={cardTitle}>{title}</h3>
      { type !== 'icon' ? (
        <div>
          <p className={cardMeta}>Kategoria: <span>Zwierzęta</span></p>
          <p className={cardMeta}>Dodano: <span>Wczoraj</span></p>
        </div>
      ) : null
    }
    </div>
  )
};

export default Card;

