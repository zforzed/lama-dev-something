import PostCard from "@/components/postCard/PostCard"
import styles from './blog.module.css'
import { getPosts } from "@/lib/data"
import {Post} from '@/lib/models'
import { connectToDb } from "@/lib/utils"

// fetch with API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog/");

  if (!res.ok) { 
    throw new Error('Fetch data error');
  }

  return res.json();
}

const BlogPage = async () => {

  // fetch with API
  const posts = await getData();
  // const shortPosts = posts.slice(0,10)
  
  // fetch without API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
    { posts.map((post)=> (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>      
      ))
    }      
    </div>
  )
}

export default BlogPage