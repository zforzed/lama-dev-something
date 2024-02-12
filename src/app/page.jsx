import Image from 'next/image'
import styles from './home.module.css'

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>      
      <h1 className={styles.title}>Creative Thoughts Agency.</h1>
      <p className={styles.desc}>A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src='/brands.png' alt='brands image' fill className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src='/hero.gif' alt='hero image' fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default Home;