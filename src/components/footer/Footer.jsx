import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>TShint</div>
      <div className={styles.text}>
        TerribleShint creative thoughts agency © All rights reserved.
      </div>
    </div>
  )
}

export default Footer