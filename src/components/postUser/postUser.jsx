import { getUser } from '@/lib/data'
import styles from './postUser.module.css'
import Image from 'next/image'

// fetch with API
// const getUser = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {cache:'no-store'})
//   if (!res.ok) { throw new Error('Fetch data error') }

//   return res.json()
// }

const postUser = async({userId}) => {
  // fetch with API
  // const user = await getUser(userId)

  // fetch without API
  const user = await getUser(userId)

  return (
    <div className={styles.container}>
      {user.img && 
          <Image 
            className={styles.avatar}
            width={50}
            height={50}
            src={user.img ? user.img : '/noavatar.png'}
            alt='post avatar'
          />
      }

      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user?.username}</span>
      </div>
    </div> 
  )
}

export default postUser