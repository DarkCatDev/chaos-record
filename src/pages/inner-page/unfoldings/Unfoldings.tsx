import { Outlet } from 'react-router-dom'
import Exbar from './Nav-Bar/Exbar';

import styles from './Unfoldings.module.css'

function Unfoldings() {
  return (
    <section>
      <div className= {styles.hero}>
          <h1 className={styles.heroTitle}>Unfoldings</h1>
          <h3 className={styles.heroSub}>Here lies what had happened
          <br /> - Saga and Ages -
          </h3>
      </div>
      <Exbar />
      <Outlet />
    </section>
  );
}

export default Unfoldings;