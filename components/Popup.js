import styles from 'styles/Popup.module.css';

const Popup = ({ children, popup, setPopup }) => {
  return (
    <div className={!popup ? styles.popup : styles.visible}>
      <div className={styles.popupContent}>
        <span className={styles.popupClose} onClick={() => setPopup(!popup)}>&#215;</span>
        {children}
      </div>
    </div>
  )
};

export default Popup;

