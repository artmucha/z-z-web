import { useRouter } from "next/router";

import styles from 'styles/Pagination.module.css';

const Pagination = ({currentPage, totalPages}) => {
	const router = useRouter();

  const handlePagination = (page) => {
    const path = router.pathname;
		const query = router.query;

    query.page = page + 1;
    router.push({
      pathname: path,
      query: query,
		});
	};

	const paginationList = [...Array(totalPages).keys()];
	
  return (
    <ul className={styles.pagination} currentPage={currentPage}>
      { paginationList.length > 1 && paginationList.map(item => (
				<li key={item}>
					<a onClick={() => handlePagination(item)}>{item + 1}</a>
				</li>
			)) }
    </ul>
  );
};

export default Pagination;