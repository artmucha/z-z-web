import { useState } from "react";
import styles from 'styles/Login.module.css';

const useRequest = ({url, method, headers, onSuccess}) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (body) => {
    try {
      setErrors(null);
      const res = await fetch(url, {method, headers, body: JSON.stringify(body)});
      const data = await res.json();

      if(onSuccess) onSuccess(data);

      if (data?.errors) {
        setErrors(
          <ul className={styles.errors}>
            {data.errors.map(err => <li key={err.field} >{err.message}</li>)}
          </ul>
        );
      }
      return data;

    } catch (err) {
      console.log(err)
    }
  }

  return [doRequest, errors];
};

export default useRequest;