// "use client"
import Image from 'next/image'
import styles from './contact.module.css'

export const metadata = {
  title: "Next App Contact Page",
  description: 'Contact Description',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/contact.png' alt='contact image' fill className={styles.img}/>
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type='text' placeholder='Name and Surname'/>
          <input type='email' placeholder='Email adress'/>
          <input type='tel' placeholder='Phone Number (optional)'/>
          <textarea
            style={{resize: 'none'}}            
            name=''
            id=''
            cols={30}
            rows={10}
            placeholder='Message'              
          />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact