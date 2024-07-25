import React from 'react'
// dynamic routes 
const page = ({params}) => {
  return (
    <div>page : {params.routingmenu}</div>
  )
}

export default page