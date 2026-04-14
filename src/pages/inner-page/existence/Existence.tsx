import { Outlet } from 'react-router-dom'
import ExBar from './Nav-Bar/Exbar'

import styles from './Existence.module.css'

function Existence() {
  return (
    <section>
      <div className= {styles.hero}>
          <h1 className={styles.heroTitle}>Existence</h1>
          <h3 className={styles.heroSub}>Here lies the what exist within 
            <br /> - Realms, Origins, Gifts, Relics, and Beasts -
          </h3>
      </div>

      <div className='existenceContent'>
        <ExBar />
        <Outlet />
      </div>
    </section>
  );
}

export default Existence;