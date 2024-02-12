import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div style={{display:"flex", height:"100vh",alignItems:"center", justifyContent:"center"}}>
      <Image src="/loading.png" alt="loading..." width={150} height={150}/>
    </div>
  )
}

export default loading