import Link from 'next/link'
import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/postUser'
import { Suspense } from 'react'
import { getPost } from '@/lib/data'

// fetch with API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`)

  if (!res.ok) { 
    throw new Error('Fetch data error') 
  }

  return res.json()
}

export const generateMetadata = async({params}) => {

  const post = await getPost(params.slug)
  return {
    title: post.title,
    description: post.desc
  }
}

const SinglePostPage = async ({params}) => {
  // fetch with API
  // const post = await getData(params.slug)

  // fetch without API
  const post = await getData(params.slug)

  return (
    <div className={styles.container}>
      {post.img && <div className={styles.imgContainer}>
        <Image fill className={styles.img} src={post.img} alt='post image'/>
      </div>}

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>

        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId}/> 
            </Suspense>
          )}
                  
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
          </div> 
        </div>

        <div className={styles.content}>
          {post?.desc}
        </div>          
      </div>
    </div>
  )
}

export default SinglePostPage