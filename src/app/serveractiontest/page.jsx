import { addPost, deletePost } from "@/lib/actions";

const ServerActionTestPage = () => {

  return (
    <div style={{display: 'flex', alignItems:'center',flexDirection:'column', gap:'50px'}}>
      <form action={addPost} style={{width:'500px',display: 'flex', flexDirection:'column', gap:'5px'}}>
        <label >Add Post</label>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="desc" placeholder="description" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="userId" placeholder="userId" />
        <button style={{width:'100px',height:'30px',marginLeft:'auto',marginRight:'auto'}}>Create</button>
      </form>

      <form action={deletePost} style={{width:'500px',display: 'flex', flexDirection:'column', gap:'5px'}}>
        <label >Delete Post</label>
        <input type="text" name='id' placeholder="post ID" />
        <button style={{width:'100px',height:'30px',marginLeft:'auto',marginRight:'auto'}}>Delete</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage
