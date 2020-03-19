import React from 'react'

export default function Index() {
  return (
    <div>
      ✍️ My blog about MicroWorld and FoldScope
    </div>
  )
}

Index.getinitialprops =()=>{
   return{
     blogCategory : 'FoldScope'  
   } 
}