import Image from 'next/image'
import styles from './about.module.css'

export const metadata = {
  title: "Next App About Page",
  description: 'About Description',
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.desc}>Duis mollit commodo sint ut mollit id Lorem duis ipsum labore labore enim pariatur qui. Esse officia deserunt duis dolore consequat elit consequat do do. Eiusmod dolore tempor cupidatat dolor nisi nisi irure adipisicing minim ullamco. Proident et exercitation cillum do pariatur aliquip exercitation tempor sit exercitation consectetur. Lorem nulla magna anim enim anim reprehenderit ullamco laboris consectetur.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>234K+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h1>5K+</h1>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/about.png' alt='about image' fill className={styles.img}/>
      </div>
    </div>
  )
}

export default About