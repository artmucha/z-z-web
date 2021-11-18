import Layout from 'components/Layout';
import Header from 'components/Header';

import styles from 'styles/Layout.module.css';
import { conversation, conversationMessege, conversationMessegeBox, conversationForm } from 'styles/Profile.module.css';
import { form, formTextArea } from 'styles/Form.module.css';

const Conversation = () => {

  return (
    <Layout>
      <Header />
      <main className={styles.container}>
        <div className={styles.pageWrapper}>
          <h1 className={styles.pageTitle}>Zgubiłem rower w krakowie</h1>
          <ul className={conversation}>

            <li className={conversationMessege}>
              <div className={conversationMessegeBox}>
                <p>Stefan</p>
                <div>
                  <div>
                    Spoko, już nie potrzebuję
                  </div>
                  <span>13:54</span>
                </div>
              </div>
            </li>
            <li className={conversationMessege}>
              <header>
                30 sierpnia
              </header>
              <div className={conversationMessegeBox}>
                <p>Ty</p>
                <div>
                  <div>
                    Cześć, chyba znalazłem Twój rower. Podesłesz jego zdjęcia?
                  </div>
                  <span>13:54</span>
                </div>
              </div>
            </li>
          </ul>

          <div className={conversationForm}>
            <form className={form}>
              <textarea 
                name="messege" 
                className={formTextArea} 
                placeholder="Napisz wiadomość" 
              />
              <button 
                className={styles.button} 
                type="submit" 
                style={{ marginTop: '30px' }} 
              >
              Wyślij
              </button>
            </form>
          </div>

        </div>
      </main>
    </Layout>
  )
};

export default Conversation;