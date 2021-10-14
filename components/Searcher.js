import { searcher, input } from 'styles/Searcher.module.css';
import { button } from 'styles/Buttons.module.css';

const Searcher = () => {
  return (
    <>
      <label className={searcher}>
        <input className={input} type="search" placeholder="Czego szukasz?" />
      </label>
      <button type="submit" class={button}>Szukaj</button>
    </>
  )
};

export default Searcher;

