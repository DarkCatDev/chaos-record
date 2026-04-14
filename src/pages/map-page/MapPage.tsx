import styles from './Map.module.css'

function MapPage() {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="/divine_world_map.html"
        width="100%"
        height="1050vh"
        className={styles.mapFrame}
        title="Divine World Map"  

      />
    </div>
  )
}

export default MapPage