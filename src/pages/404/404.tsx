import styles  from './404.module.css'

function NotFound() {
  return (
    <div className={styles.voidPage}>
      <h1>404 - Record not found</h1>
      <p>Go back, child. None exist beyond this domain</p>
    </div>
  )
}

export default NotFound