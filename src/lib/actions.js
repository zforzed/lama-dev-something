"use server"

import { revalidatePath } from "next/cache"
import { connectToDb } from "./utils"
import { Post, User } from '@/lib/models'
import { signIn, signOut } from "./auth"
import bcrypt from 'bcryptjs'

export const addPost = async(prevState, formData)=>{
  const {title,desc,slug,userId} = Object.fromEntries(formData)
  try {
    connectToDb()
    const newPost = new Post({title,desc,slug,userId})
    await newPost.save()
    revalidatePath('/blog')
    revalidatePath('/admin')
  } catch (error) {
    console.log("add post error", error)
  }
}

export const deletePost = async(formData)=>{
  const { id } = Object.fromEntries(formData)
  try {
    connectToDb()
    await Post.findByIdAndDelete(id)
    revalidatePath('/blog')
    revalidatePath('/admin')
  } catch (error) {
    console.log("delete post error", error)
  }
}

export const addUser = async(prevState, formData)=>{
  const {username,email,password,img} = Object.fromEntries(formData)
  try {
    connectToDb()
    const newUser = new User({username,email,password,img})
    await newUser.save()
    revalidatePath('/admin')
  } catch (error) {
    console.log("add user error", error)
  }
}

export const deleteUser = async(formData)=>{
  const { id } = Object.fromEntries(formData)
  try {
    connectToDb()
    await Post.deleteMany({userId: id})
    await User.findByIdAndDelete(id)
    revalidatePath('/admin')
  } catch (error) {
    console.log("delete user error", error)
  }
}

export const handleGithubLogin = async()=>{
  await signIn('github')
}
export const handleLogout = async()=>{
  await signOut()
}

export const register = async(prevState, formData)=> {
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData)

  if (password !== passwordRepeat) {
    return {error: "Passwords do not match"}
  }

  try {
    connectToDb()

    const user = await User.findOne({username})
    const dbEmail = await User.findOne({email})

    if (user) { 
      return {error: `User ${username} already exists`}
    }
    if (dbEmail) { 
      return {error: `User with this email(${email}) already exists`}
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({ username,email,password: hashedPassword,img })

    await newUser.save()
    
    const allShit = await User.find()
    console.log('ALL USERS', allShit)  

    return {success: true}
  } catch (error) {
    console.log("Register error.", error)
    return {error: 'Register error.'}
  }
}

export const login = async(prevState, formData)=> {
  const { username, password} = Object.fromEntries(formData)
  try {
    connectToDb()    
    await signIn('credentials', {username, password})
  } catch (error) {
    console.log('Login error.', error)

    if(error.message.includes("CredentialsSignin")) {
      return {error:"Wrong username or password"}
    }
    throw error
  }
}