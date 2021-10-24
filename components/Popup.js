import styles from 'styles/Popup.module.css';

const Popup = ({ children, popup, setPopup }) => {
  return (
    <div className={styles.popup} style={popup ? { visibility: 'visible', opacity: 1 } : { visibility: 'hidden', opacity: 0 }}>
      <div className={styles.popupContent}>
        <span className={styles.popupClose} onClick={() => setPopup(!popup)}> &#215;</span>
        {children}
      </div>
    </div>
  )
};

export default Popup;

