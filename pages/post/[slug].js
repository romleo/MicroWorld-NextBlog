import React from 'react'


export default function PostTamplate(props) {
   return(
     <div>
       Heal we"ll load "{props.slug}" 
     </div>  
   ) 
}

PostTemplate.getInitialProps = async (context) => {
   const {slug} = context.query

   return{slug}
}