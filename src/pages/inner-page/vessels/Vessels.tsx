import { Outlet } from "react-router-dom"
import ExBar from "./Nav-Bar/Exbar"

import styles from "./Vessels.module.css"

function Vessels() {
    return (
        <section>
            <div className= {styles.hero}>
                <h1 className={styles.heroTitle}>Vessels</h1>
                <h3 className={styles.heroSub}>Here lies those who have lived 
                <br /> - Heroes, Dominion, and Bloodline -
                </h3>
            </div>
            <ExBar />
            <Outlet />
        </section>
    )
}


export default Vessels