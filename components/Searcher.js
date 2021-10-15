import { searcher, input } from 'styles/Searcher.module.css';
import { button } from 'styles/Buttons.module.css';

const Searcher = () => {
  return (
    <>
      <form action="/znalezione" method="GET">
        <label className={searcher}>
          <input className={input} type="search" placeholder="Czego szukasz?" />
        </label>
        <button type="submit" class={button}>Szukaj</button>
      </form>
    </>
  )
};

export default Searcher;

