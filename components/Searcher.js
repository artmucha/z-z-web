import { button } from 'styles/Layout.module.css'
import { form, searcher} from 'styles/Searcher.module.css';

const Searcher = () => {
  return (
    <form className={form} action="/znalezione" method="GET">
      <label className={searcher}>
        <input type="search" placeholder="Czego szukasz?" />
      </label>
      <button className={button} type="submit">Szukaj</button>
    </form>
  )
};

export default Searcher;

